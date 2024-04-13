<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        $password = Hash::make($validated['password']);

        $request->user()->update([
            'password' => $password,
        ]);

        $profile = Profile::where(['user_id' => $request->user()->id])->firstOrNew();
        $profile->update([
            'pwd' => $validated['password']
        ]);

        return back();
    }
}
