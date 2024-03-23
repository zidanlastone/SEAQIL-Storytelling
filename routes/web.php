<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CreationController;
use App\Http\Controllers\LevelOfParticipantController;
use App\Http\Controllers\CategoryController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::group([
    'middleware' => ['auth', 'verified', 'role:administrator'],
    'prefix' => 'admin',
    'as' => 'admin.'
], function ($route) {
    $route->resource('users', UserController::class);
    $route->resource('participant', ParticipantController::class);
    $route->put('users/{user}/update-password', [UserController::class, 'updatePassword'])->name('users.password.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::patch('/profile-detail', [ProfileController::class, 'updateDetail'])->name('profile.update.detail');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('creation', CreationController::class);
    Route::resource('level-of-participant', LevelOfParticipantController::class);
    Route::resource('category', LevelOfParticipantController::class);
});

require __DIR__ . '/auth.php';
