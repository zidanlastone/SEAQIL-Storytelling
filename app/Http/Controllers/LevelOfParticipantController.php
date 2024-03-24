<?php

namespace App\Http\Controllers;

use App\Http\Requests\Participant\StoreLevelOfParticipantRequest;
use App\Http\Requests\Participant\UpdateLevelOfParticipantRequest;
use App\Models\Participant\LevelOfParticipant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LevelOfParticipantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("LevelOfParticipant/List", [
            "level_of_participants" => LevelOfParticipant::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return to_route("level_of_participant.index");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLevelOfParticipantRequest $request)
    {
        //
        LevelOfParticipant::create([
            'level_name' => $request->level_name,
            'descripton' => $request->description
        ]);
        return to_route("level-of-participant.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(LevelOfParticipant $levelOfParticipant)
    {
        //
        return to_route("level-of-participant.index");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LevelOfParticipant $levelOfParticipant)
    {
        //
        return to_route("level-of-participant.index");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLevelOfParticipantRequest $request, LevelOfParticipant $levelOfParticipant)
    {
        $levelOfParticipant->level_name = $request->level_name;
        $levelOfParticipant->description = $request->description;
        $levelOfParticipant->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, LevelOfParticipant $levelOfParticipant)
    {
        //
        $validated = $request->validate([
            'level_name' => 'required|in:' . $levelOfParticipant->level_name
        ]);

        if ($validated) {
            $levelOfParticipant->delete();
        }

        return to_route("level-of-participant.index");
    }
}
