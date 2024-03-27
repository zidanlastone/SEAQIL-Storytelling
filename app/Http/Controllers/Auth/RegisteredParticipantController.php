<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterParticipantRequest;

use App\Models\Category;
use App\Models\I18n\Language;
use App\Models\Participant\Creation;
use App\Models\Participant\Participant;
use App\Models\Participant\LevelOfParticipant;
use App\Models\User;
use App\Models\Profile;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredParticipantController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $categories = Category::all();
        $language = Language::all();
        $levelOfParticipant = LevelOfParticipant::all();
        return Inertia::render('Auth/RegisterParticipant', [
            'categories' => $categories,
            'languages' => $language,
            'level_of_participants' => $levelOfParticipant,
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterParticipantRequest $request): RedirectResponse
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->assignRole('participant');

        Profile::create([
            'user_id' => $user->id,
            'gender' => $request->gender,
            'whatsapp_contact' => $request->whatsapp_contact,
            'parent_contact' => $request->parent_contact,
            'institution' => $request->institution,
            'country' => $request->country,
            'province' => $request->province,
            'city' => $request->city,
            'address' => $request->address,
            'pwd' => $request->password,
        ]);

        if ($request->hasFile('payment_receipt')) {
            $filename = \Carbon\Carbon::now()->format('Ymdhis') . '-' . $request->payment_receipt->getClientOriginalName();
            $path = $request->file('payment_receipt')->storeAs('payment_receipt', $filename, 'public');

            $participant = Participant::create([
                'user_id' => $user->id,
                'category_id' => $request->category_id,
                'language_id' => $request->language_id,
                'level_of_participant_id' => $request->level_of_participant_id,
                'status_verifikasi' => '0',
                'payment_receipt' => $path,
                'certificate' => '',
            ]);

            Creation::create([
                'id_participant' => $participant->id,
                'title' => $request->title,
                'upload_location' => null,
                'upload_status' => '0',
            ]);
        }


        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
