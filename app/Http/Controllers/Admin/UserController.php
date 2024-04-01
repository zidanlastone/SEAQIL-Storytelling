<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\DeleteUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Requests\User\UpdateUserPasswordRequest;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\User;
use DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users = User::get();
        $roles = DB::table('roles')->get();

        return Inertia::render('Users/List', [
            'users' => $users,
            'roles' => $roles,
            'status' => session('status'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateUserRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'email_verified_at' => \Carbon\Carbon::now()
        ]);

        $user->assignRole($request->role);

        event(new Registered($user));

        return to_route("admin.users.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return to_route("admin.users.edit", $user);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
        $roles = DB::table('roles')->get();
        $user = User::where(['id' => $user->id])->with(['profile'])->first();

        return Inertia::render('Users/Edit', [
            'user' => $user,
            'roles' => $roles,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        if (!$user->hasRole($request->role)) {
            $user->assignRole($request->role);
        }

        // TODO: notifikasi ketika berhasil update user

        return to_route('admin.users.index');
    }

    public function updatePassword(UpdateUserPasswordRequest $request, User $user)
    {
        $user->update([
            'password' => Hash::make($request->password),
        ]);

        // TODO notifikasi ketika berhasil update password

        return to_route('admin.users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteUserRequest $request, User $user)
    {

        if ($request->validated()) {
            $user->delete();
            // TODO: melakukan notifikasi terhadap data yang dihapus

            return to_route('admin.users.index');
        }
        return to_route('admin.users.index');
    }
}
