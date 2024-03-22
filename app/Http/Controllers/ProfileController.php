<?php

namespace App\Http\Controllers;

use App\Http\Requests\Profile\DetailProfileCreateUpdateRequest;
use App\Http\Requests\Profile\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Profile;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $profile = Auth::user()->profile;

        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'profile' => $profile
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Update the user's profile information.
     */
    public function updateDetail(DetailProfileCreateUpdateRequest $request): RedirectResponse
    {
        $input = $request->except(['password', 'password_confirmation']);
        $input['pwd'] = $request->password;

        if(!Hash::check($request->password, $request->user()->password)){
            return to_route('profile.edit');
        }

        if(!$request->user()->profile) {
            $input['user_id'] = $request->user()->id;
            $created = Profile::create($input);
            if($created)
            return to_route('profile.edit');
        }

        $request->user()->profile->update($input);
        
        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
