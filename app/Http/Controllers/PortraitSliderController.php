<?php

namespace App\Http\Controllers;

use App\Models\PortraitSlider;
use App\Http\Requests\Slider\StoreSliderRequest;
use App\Http\Requests\Slider\UpdateSliderRequest;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PortraitSliderController extends Controller
{
/**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render("PortraitSlider/List", [
            "sliders" => PortraitSlider::all(),
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
            $path = $request->file('source')->storeAs('portrait-slider', $filename, 'public');

            $PortraitSlider = PortraitSlider::create([
                'title' => $request->title,
                'type' => $request->type,
                'description' => $request->description,
                'source' => $path,
            ]);
            return to_route("portrait-slider.index", $PortraitSlider);
        }

        return to_route("portrait-slider.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(PortraitSlider $PortraitSlider)
    {
        //
        return to_route("portrait-slider.index");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PortraitSlider $PortraitSlider)
    {
        //
        return to_route("portrait-slider.index");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSliderRequest $request, PortraitSlider $PortraitSlider)
    {
        //
        if ($request->file('source')->isValid()) {
            $filename = Carbon::now()->format('Ymdhis') . '-' . $request->source->getClientOriginalName();
            $path = $request->file('source')->storeAs('portrait-slider', $filename, 'public');
            $PortraitSlider->source = $path;
        }

        $PortraitSlider->title = $request->title;
        $PortraitSlider->type = $request->type;
        $PortraitSlider->description = $request->description;
        $PortraitSlider->save();

        return to_route("portrait-slider.index", $PortraitSlider);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PortraitSlider $PortraitSlider)
    {
        if (Storage::disk('public')->exists($PortraitSlider->source)) {
            Storage::disk('public')->delete("public/portrait-slider/" . $PortraitSlider->source);
        }
        $PortraitSlider->delete();
        return to_route("portrait-slider.index");
    }
}
