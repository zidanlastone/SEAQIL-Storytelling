<?php

namespace App\Http\Controllers;

use App\Http\Requests\Participant\StoreCreationRequest;
use App\Http\Requests\Participant\UpdateCreationRequest;
use App\Models\Participant\Creation;
use App\Models\Participant\Participant;
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
        $creations = Creation::where($where)->with([
            // 'participant:payment_receipt,certificate,status_verifikasi',
            'participant' => function ($query) {
                $query->select('id', 'payment_receipt', 'certificate', 'status_verifikasi', 'user_id', 'language_id', 'category_id');
            },
            'participant.user' => function ($query) {
                $query->select('id', 'name', 'email');
            },
            'participant.category' => function ($query) {
                $query->select('id', 'category_name');
            },
            'participant.language' => function ($query) {
                $query->select('id', 'name');
            },
        ])->has('participant');

        // dd($creations->first()->participant->user->id);

        $creation = null;
        if ($user->hasRole('participant')) {
            $participations = Participant::where(['user_id' => $user->id])->first();
            $creation = Creation::where(['id_participant' => $participations->id])->first();
        }

        return Inertia::render("Creation/List", [
            "creations" => $creations->get(),
            "creation" => $creation
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
        Creation::create([
            'upload_status' => $request->upload_status,
            'upload_location' => $request->upload_location,
            'title' => $request->title,
        ]);
        return to_route('creation.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Creation $creation)
    {
        //
        return to_route('creation.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Creation $creation)
    {
        //
        return to_route('creation.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCreationRequest $request, Creation $creation)
    {
        //
        $creation->upload_status = $request->upload_status;
        $creation->upload_location = $request->upload_location;
        $creation->title = $request->title;
        $creation->save();

        return to_route('creation.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Creation $creation)
    {
        //
        $creation->delete();
        return to_route('creation.index');
    }
}
