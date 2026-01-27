<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function featured()
    {
        $properties = Property::where('is_featured', true)
            ->with('rentManager')
            ->latest()
            ->take(10)
            ->get();

        return response()->json($properties);
    }

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

    public function show($id)
    {
        $property = Property::with('rentManager')->findOrFail($id);
        return response()->json($property);
    }
}

