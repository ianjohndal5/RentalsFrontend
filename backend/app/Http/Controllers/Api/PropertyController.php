<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class PropertyController extends Controller
{
    #[OA\Get(
        path: "/properties/featured",
        summary: "Get featured properties",
        tags: ["Properties"],
        responses: [
            new OA\Response(
                response: 200,
                description: "List of featured properties",
                content: new OA\JsonContent(
                    type: "array",
                    items: new OA\Items(type: "object")
                )
            ),
        ]
    )]
    public function featured()
    {
        $properties = Property::where('is_featured', true)
            ->with('rentManager')
            ->latest()
            ->take(10)
            ->get();

        return response()->json($properties);
    }

    #[OA\Get(
        path: "/properties",
        summary: "Get list of properties",
        tags: ["Properties"],
        parameters: [
            new OA\Parameter(
                name: "type",
                in: "query",
                required: false,
                description: "Filter by property type",
                schema: new OA\Schema(type: "string")
            ),
            new OA\Parameter(
                name: "location",
                in: "query",
                required: false,
                description: "Filter by location",
                schema: new OA\Schema(type: "string")
            ),
            new OA\Parameter(
                name: "search",
                in: "query",
                required: false,
                description: "Search in title and description",
                schema: new OA\Schema(type: "string")
            ),
            new OA\Parameter(
                name: "page",
                in: "query",
                required: false,
                description: "Page number for pagination",
                schema: new OA\Schema(type: "integer", default: 1)
            ),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: "Paginated list of properties",
                content: new OA\JsonContent(
                    type: "object",
                    properties: [
                        new OA\Property(property: "data", type: "array", items: new OA\Items(type: "object")),
                        new OA\Property(property: "current_page", type: "integer"),
                        new OA\Property(property: "per_page", type: "integer"),
                        new OA\Property(property: "total", type: "integer"),
                    ]
                )
            ),
        ]
    )]
    public function index(Request $request)
    {
        $query = Property::with('rentManager');

        if ($request->has('type')) {
            $query->where('type', $request->type);
        }

        if ($request->has('location')) {
            $query->where('location', 'like', '%' . $request->location . '%');
        }

        if ($request->has('search')) {
            $query->where(function($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('description', 'like', '%' . $request->search . '%');
            });
        }

        $properties = $query->latest()->paginate(12);

        return response()->json($properties);
    }

    #[OA\Get(
        path: "/properties/{id}",
        summary: "Get property by ID",
        tags: ["Properties"],
        parameters: [
            new OA\Parameter(
                name: "id",
                in: "path",
                required: true,
                description: "Property ID",
                schema: new OA\Schema(type: "integer")
            ),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: "Property details",
                content: new OA\JsonContent(type: "object")
            ),
            new OA\Response(
                response: 404,
                description: "Property not found",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "message", type: "string", example: "No query results for model [App\\Models\\Property] {id}"),
                    ]
                )
            ),
        ]
    )]
    public function show($id)
    {
        $property = Property::with('rentManager')->findOrFail($id);
        return response()->json($property);
    }
}

