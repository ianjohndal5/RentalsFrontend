<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Agent;
use App\Models\AgentApproval;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use OpenApi\Attributes as OA;

#[OA\Info(
    version: "1.0.0",
    title: "Rentals.ph API",
    description: "API documentation for Rentals.ph backend"
)]
#[OA\Server(
    url: "/api",
    description: "API Server"
)]
#[OA\SecurityScheme(
    securityScheme: "sanctum",
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT"
)]
class AdminController extends Controller
{
    /**
     * Ensure the authenticated user is an Admin instance.
     */
    protected function ensureAdmin(Request $request): Admin
    {
        $user = $request->user();
        
        if (!$user instanceof Admin) {
            abort(403, 'Access denied. Admin authentication required.');
        }

        if (!$user->is_active) {
            abort(403, 'Your admin account is inactive.');
        }

        return $user;
    }

    /**
     * Login admin and return access token.
     */
    #[OA\Post(
        path: "/admin/login",
        summary: "Login admin",
        tags: ["Admin"],
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\MediaType(
                mediaType: "application/json",
                schema: new OA\Schema(
                    required: ["email", "password"],
                    properties: [
                        new OA\Property(property: "email", type: "string", format: "email", description: "Admin's email address"),
                        new OA\Property(property: "password", type: "string", description: "Admin's password"),
                    ]
                )
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: "Login successful",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "success", type: "boolean", example: true),
                        new OA\Property(property: "message", type: "string", example: "Login successful"),
                        new OA\Property(
                            property: "data",
                            type: "object",
                            properties: [
                                new OA\Property(property: "token", type: "string", example: "1|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),
                                new OA\Property(property: "token_type", type: "string", example: "Bearer"),
                                new OA\Property(property: "admin", type: "object"),
                            ]
                        ),
                    ]
                )
            ),
            new OA\Response(
                response: 401,
                description: "Invalid credentials or inactive account",
            ),
        ]
    )]
    public function login(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $admin = Admin::where('email', $request->email)->first();

        if (!$admin || !Hash::check($request->password, $admin->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email or password',
            ], 401);
        }

        if (!$admin->is_active) {
            return response()->json([
                'success' => false,
                'message' => 'Your account is inactive. Please contact the administrator.',
            ], 401);
        }

        $token = $admin->createToken('admin-auth-token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Login successful',
            'data' => [
                'token' => $token,
                'token_type' => 'Bearer',
                'admin' => [
                    'id' => $admin->id,
                    'first_name' => $admin->first_name,
                    'last_name' => $admin->last_name,
                    'email' => $admin->email,
                    'role' => $admin->role,
                ],
            ],
        ], 200);
    }

    /**
     * Get all pending agents awaiting approval.
     */
    #[OA\Get(
        path: "/admin/agents/pending",
        summary: "Get all pending agents",
        tags: ["Admin"],
        security: [["sanctum" => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: "Pending agents retrieved successfully",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "success", type: "boolean", example: true),
                        new OA\Property(
                            property: "data",
                            type: "array",
                            items: new OA\Items(
                                type: "object",
                                properties: [
                                    new OA\Property(property: "id", type: "integer", example: 1),
                                    new OA\Property(property: "first_name", type: "string", example: "John"),
                                    new OA\Property(property: "last_name", type: "string", example: "Doe"),
                                    new OA\Property(property: "email", type: "string", example: "john@example.com"),
                                    new OA\Property(property: "agency_name", type: "string", example: "ABC Realty"),
                                    new OA\Property(property: "prc_license_number", type: "string", example: "PRC-12345"),
                                    new OA\Property(property: "status", type: "string", example: "pending"),
                                    new OA\Property(property: "created_at", type: "string", format: "date-time"),
                                ]
                            )
                        ),
                    ]
                )
            ),
        ]
    )]
    public function getPendingAgents(Request $request): JsonResponse
    {
        $this->ensureAdmin($request);

        $pendingAgents = Agent::where('status', 'pending')
            ->select([
                'id',
                'first_name',
                'last_name',
                'email',
                'agency_name',
                'prc_license_number',
                'license_type',
                'status',
                'created_at',
            ])
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $pendingAgents,
        ]);
    }

    /**
     * Get a specific agent's details for review.
     */
    #[OA\Get(
        path: "/admin/agents/{id}",
        summary: "Get agent details for review",
        tags: ["Admin"],
        security: [["sanctum" => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: "Agent details retrieved successfully",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "success", type: "boolean", example: true),
                        new OA\Property(property: "data", type: "object"),
                    ]
                )
            ),
            new OA\Response(
                response: 404,
                description: "Agent not found",
            ),
        ]
    )]
    public function getAgentDetails(Request $request, int $id): JsonResponse
    {
        $this->ensureAdmin($request);

        $agent = Agent::with('latestApproval.admin')
            ->findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $agent,
        ]);
    }

    /**
     * Approve an agent.
     */
    #[OA\Post(
        path: "/admin/agents/{id}/approve",
        summary: "Approve an agent",
        tags: ["Admin"],
        security: [["sanctum" => []]],
        requestBody: new OA\RequestBody(
            required: false,
            content: new OA\MediaType(
                mediaType: "application/json",
                schema: new OA\Schema(
                    properties: [
                        new OA\Property(property: "notes", type: "string", nullable: true, description: "Optional notes about the approval"),
                    ]
                )
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: "Agent approved successfully",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "success", type: "boolean", example: true),
                        new OA\Property(property: "message", type: "string", example: "Agent approved successfully"),
                        new OA\Property(property: "data", type: "object"),
                    ]
                )
            ),
            new OA\Response(
                response: 404,
                description: "Agent not found",
            ),
            new OA\Response(
                response: 422,
                description: "Validation error or agent already processed",
            ),
        ]
    )]
    public function approveAgent(Request $request, int $id): JsonResponse
    {
        $admin = $this->ensureAdmin($request);

        // Check if admin has permission
        if (!$admin->canApproveAgents()) {
            return response()->json([
                'success' => false,
                'message' => 'You do not have permission to approve agents.',
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'notes' => 'nullable|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $agent = Agent::findOrFail($id);

        // Check if agent is already processed
        if ($agent->status !== 'pending') {
            return response()->json([
                'success' => false,
                'message' => "Agent is already {$agent->status}. Cannot approve again.",
            ], 422);
        }

        // Update agent status
        $agent->status = 'approved';
        $agent->verified = true;
        $agent->save();

        // Create approval record
        AgentApproval::create([
            'agent_id' => $agent->id,
            'admin_id' => $admin->id,
            'action' => 'approved',
            'notes' => $request->notes,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Agent approved successfully',
            'data' => [
                'agent' => $agent->fresh(['latestApproval.admin']),
            ],
        ]);
    }

    /**
     * Reject an agent.
     */
    #[OA\Post(
        path: "/admin/agents/{id}/reject",
        summary: "Reject an agent",
        tags: ["Admin"],
        security: [["sanctum" => []]],
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\MediaType(
                mediaType: "application/json",
                schema: new OA\Schema(
                    required: ["notes"],
                    properties: [
                        new OA\Property(property: "notes", type: "string", description: "Reason for rejection"),
                    ]
                )
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: "Agent rejected successfully",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "success", type: "boolean", example: true),
                        new OA\Property(property: "message", type: "string", example: "Agent rejected successfully"),
                        new OA\Property(property: "data", type: "object"),
                    ]
                )
            ),
            new OA\Response(
                response: 404,
                description: "Agent not found",
            ),
            new OA\Response(
                response: 422,
                description: "Validation error or agent already processed",
            ),
        ]
    )]
    public function rejectAgent(Request $request, int $id): JsonResponse
    {
        $admin = $this->ensureAdmin($request);

        // Check if admin has permission
        if (!$admin->canApproveAgents()) {
            return response()->json([
                'success' => false,
                'message' => 'You do not have permission to reject agents.',
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'notes' => 'required|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $agent = Agent::findOrFail($id);

        // Check if agent is already processed
        if ($agent->status !== 'pending') {
            return response()->json([
                'success' => false,
                'message' => "Agent is already {$agent->status}. Cannot reject again.",
            ], 422);
        }

        // Update agent status
        $agent->status = 'rejected';
        $agent->save();

        // Create rejection record
        AgentApproval::create([
            'agent_id' => $agent->id,
            'admin_id' => $admin->id,
            'action' => 'rejected',
            'notes' => $request->notes,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Agent rejected successfully',
            'data' => [
                'agent' => $agent->fresh(['latestApproval.admin']),
            ],
        ]);
    }

    /**
     * Get all agents with their approval status.
     */
    #[OA\Get(
        path: "/admin/agents",
        summary: "Get all agents",
        tags: ["Admin"],
        security: [["sanctum" => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: "Agents retrieved successfully",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "success", type: "boolean", example: true),
                        new OA\Property(property: "data", type: "array", items: new OA\Items(type: "object")),
                    ]
                )
            ),
        ]
    )]
    public function getAllAgents(Request $request): JsonResponse
    {
        $this->ensureAdmin($request);

        $status = $request->query('status'); // Optional filter by status

        $query = Agent::with('latestApproval.admin');

        if ($status) {
            $query->where('status', $status);
        }

        $agents = $query->orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'data' => $agents,
        ]);
    }
}

