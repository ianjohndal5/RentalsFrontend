<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class BlogController extends Controller
{
    #[OA\Get(
        path: "/blogs",
        summary: "Get list of blogs",
        tags: ["Blogs"],
        responses: [
            new OA\Response(
                response: 200,
                description: "List of latest blogs (max 10)",
                content: new OA\JsonContent(
                    type: "array",
                    items: new OA\Items(type: "object")
                )
            ),
        ]
    )]
    public function index()
    {
        $blogs = Blog::latest()->take(10)->get();
        return response()->json($blogs);
    }

    #[OA\Get(
        path: "/blogs/{id}",
        summary: "Get blog by ID",
        tags: ["Blogs"],
        parameters: [
            new OA\Parameter(
                name: "id",
                in: "path",
                required: true,
                description: "Blog ID",
                schema: new OA\Schema(type: "integer")
            ),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: "Blog details",
                content: new OA\JsonContent(type: "object")
            ),
            new OA\Response(
                response: 404,
                description: "Blog not found",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "message", type: "string", example: "No query results for model [App\\Models\\Blog] {id}"),
                    ]
                )
            ),
        ]
    )]
    public function show($id)
    {
        $blog = Blog::findOrFail($id);
        return response()->json($blog);
    }
}

