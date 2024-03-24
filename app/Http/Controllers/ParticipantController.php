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
use Carbon\Carbon;

class ParticipantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $profile = Auth::user()->profile;

        $users = User::all();
        $categories = Category::all();
        $language = Language::all();
        $levelOfParticipant = LevelOfParticipant::all();
        $participant = Participant::with([
            'user',
            'category',
            'language',
            'level_of_participant'
        ])->get();


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

        if ($request->file('payment_receipt')->isValid()) {
            $filename = Carbon::now()->format('Ymdhis') . '-' . $request->payment_receipt->getClientOriginalName();
            $path = $request->file('payment_receipt')->storeAs('payment_receipt', $filename);
            $participant = Participant::create([
                'user_id' => $request->user_id,
                'category_id' => $request->category_id,
                'language_id' => $request->language_id,
                'level_of_participant_id' => $request->level_of_participant_id,
                'certificate' => $request->certificate,
                'status_verifikasi' => $request->status_verifikasi,
                'payment_receipt' => $path,
            ]);
            if ($participant) {
                return to_route('participant.index');
            }

            if ($request->accepts('application/json')) {
                return response()->json(['message' => 'success', 'data' => $participant], 201);
            }
        }

        return to_route('participant.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Participant $participant)
    {
        // 
        return to_route('participant.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Participant $participant)
    {
        //
        return to_route('participant.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateParticipantRequest $request, Participant $participant)
    {
        if ($request->file('payment_receipt')->isValid()) {
            $filename = Carbon::now()->format('Ymdhis') . '-' . $request->payment_receipt->getClientOriginalName();
            $path = $request->file('payment_receipt')->storeAs('payment_receipt', $filename);
            $participant->payment_receipt = $path;
        }

        $participant->user_id = $request->user_id;
        $participant->category_id = $request->category_id;
        $participant->language_id = $request->language_id;
        $participant->certificate = $request->certificate;
        $participant->status_verifikasi = $request->status_verifikasi;
        $participant->level_of_participant_id = $request->level_of_participant_id;
        $participant->save();

        if ($participant) {
            return to_route('admin.participant.index');
        }

        if ($request->accepts('application/json')) {
            return response()->json(['message' => 'success', 'data' => $participant], 201);
        }

        return to_route('participant.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Participant $participant)
    {
        //
        $participant->delete();
        return to_route('participant.index');
    }
}
