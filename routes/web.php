<?php

use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\I18n\LanguageController;
use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CreationController;
use App\Http\Controllers\LevelOfParticipantController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SliderController;

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
    $route->resource('role', RoleController::class);
    $route->resource('permission', PermissionController::class);
    $route->resource('external-service-config', PermissionController::class);
    $route->put('users/{user}/update-password', [UserController::class, 'updatePassword'])->name('users.password.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::patch('/profile-detail', [ProfileController::class, 'updateDetail'])->name('profile.update.detail');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::resource('participant', ParticipantController::class);
    Route::resource('creation', CreationController::class);
    Route::resource('level-of-participant', LevelOfParticipantController::class);
    Route::resource('category', CategoryController::class);
    Route::resource('language', LanguageController::class);
    Route::resource('slider', SliderController::class);
});

require __DIR__ . '/auth.php';
