<?php

namespace App\Http\Controllers;

use App\Models\Participant\Creation;
use App\Models\Participant\Participant;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    //
    public function index()
    {

        $user = Auth::user();

        $participant_count = Participant::count('id');
        $verified_participant_count = Participant::where(['status_verifikasi' => '1'])->count('id');

        $uploaded_creation_count = Creation::where(['upload_status' => '1'])->count('id');
        $notuploaded_creation_count = Creation::where(['upload_status' => '0'])->count('id');


        $participation = Participant::where([
            "user_id" => $user->id
        ])->with(['creation'])->first();

        // dd($participant_count, $verified_participant_count, $uploaded_creation_count, $notuploaded_creation_count);

        return Inertia::render('Dashboard', [
            'counts' => [
                'participant_count' => $participant_count,
                'verified_participant_count' => $verified_participant_count,
                'uploaded_creation_count' => $uploaded_creation_count,
                'notuploaded_creation_count' => $notuploaded_creation_count,
            ],
            'participation' => $participation
        ]);
    }
}
