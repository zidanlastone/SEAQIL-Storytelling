<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\I18n\Language;
use App\Models\Participant\LevelOfParticipant;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Participant\StoreParticipantRequest;
use App\Http\Requests\Participant\UpdateParticipantRequest;
use App\Models\Participant\Participant;

use Inertia\Inertia;
use Inertia\Response;

class ParticipantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $profile = Auth::user()->profile;

        $users = User::all();
        $participant = Participant::all();
        $categories = Category::all();
        $language = Language::all();
        $levelOfParticipant = LevelOfParticipant::all();

        // dd($participant, $categories, $language, $levelOfParticipant);

        return Inertia::render('Participant/List', [
            'status' => session('status'),
            'profile' => $profile,
            'users' => $users,
            'participants' => $participant,
            'categories' => $categories,
            'languages' => $language,
            'level_of_participant' => $levelOfParticipant
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreParticipantRequest $request)
    {
        $participant = Participant::create($request->all());
        if ($participant) {
            return to_route('admin.participant.index');
        }
        return to_route('admin.participant.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Participant $participant)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Participant $participant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateParticipantRequest $request, Participant $participant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Participant $participant)
    {
        //
    }
}
