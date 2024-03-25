<?php

namespace App\Http\Controllers;

use App\Http\Requests\Slider\StoreSliderRequest;
use App\Http\Requests\Slider\UpdateSliderRequest;
use App\Models\Slider;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render("Slider/List", [
            "sliders" => Slider::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSliderRequest $request)
    {
        if ($request->file('source')->isValid()) {
            $filename = Carbon::now()->format('Ymdhis') . '-' . $request->source->getClientOriginalName();
            $path = $request->file('source')->storeAs('slider', $filename, 'public');

            $slider = Slider::create([
                'title' => $request->title,
                'type' => $request->type,
                'description' => $request->description,
                'source' => $path,
            ]);
            return to_route("slider.index", $slider);
        }

        return to_route("slider.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Slider $slider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Slider $slider)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSliderRequest $request, Slider $slider)
    {
        //
        if ($request->file('source')->isValid()) {
            $filename = Carbon::now()->format('Ymdhis') . '-' . $request->source->getClientOriginalName();
            $path = $request->file('source')->storeAs('slider', $filename, 'public');
            $slider->source = $path;
        }

        $slider->title = $request->title;
        $slider->type = $request->type;
        $slider->description = $request->description;
        $slider->save();

        return to_route("slider.index", $slider);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Slider $slider)
    {
        if (Storage::disk('public')->exists($slider->source)) {
            Storage::disk('public')->delete("public/slider/" . $slider->source);
        }
        $slider->delete();
        return to_route("slider.index");
    }
}
