<?php

namespace App\Http\Controllers;

use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;
use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;

use Carbon\Carbon;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render("Category/List", [
            "categories" => Category::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return to_route('category.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {

        if ($request->file('image')->isValid()) {
            $filename = Carbon::now()->format('Ymdhis') . '-' . $request->image->getClientOriginalName();
            $path = $request->file('image')->storeAs('image', $filename);
            Category::create([
                'category_name' => $request->category_name,
                'image' => $path
            ]);
        }

        return to_route('category.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
        return to_route('category.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
        return to_route('category.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        //
        if ($request->file('image')->isValid()) {
            $filename = Carbon::now()->format('Ymdhis') . '-' . $request->image->getClientOriginalName();
            $path = $request->file('image')->storeAs('image', $filename);
            $category->image = $path;
        }

        $category->category_name = $request->category_name;
        $category->save();

        return to_route('category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Category $category)
    {
        $validated = $request->validate([
            'category_name' => 'required|in:' . $category->category_name
        ]);

        if ($validated) {
            $category->delete();
        }

        return to_route('category.index');
    }
}
