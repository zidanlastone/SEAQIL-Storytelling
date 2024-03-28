<?php

namespace App\Http\Controllers;

use App\Http\Requests\Participant\StoreCreationRequest;
use App\Http\Requests\Participant\UpdateCreationRequest;
use App\Models\Participant\Creation;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CreationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $where = [];

        $user = Auth::user();
        $creations = Creation::where($where);

        if ($user->hasRole('participant')) {
            $participations = $user->participation()->get()->pluck('id');
            $creations = $creations->whereIn('id_participant', $participations);
        }

        return Inertia::render("Creation/List", [
            "creations" => $creations->get(),
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
    public function store(StoreCreationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Creation $creation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Creation $creation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCreationRequest $request, Creation $creation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Creation $creation)
    {
        //
    }
}
