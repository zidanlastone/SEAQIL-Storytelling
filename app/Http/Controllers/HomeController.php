<?php

namespace App\Http\Controllers;

use App\Models\PageSection;
use App\Models\PortraitSlider;
use App\Models\Slider;
use App\Models\Category;


use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Carbon\Carbon;

class HomeController extends Controller
{
  /**
   * Display the landing page
   */
  public function index(){

    $sliders = Slider::all();
    $categories = Category::all();
    $portrait_sliders = PortraitSlider::all();

    $deskripsi_lomba = PageSection::where(['section' => 'deskripsi-lomba'])->get();
    $mekanisme_pelaksanaan = PageSection::where(['section' => 'mekanisme-pelaksanaan'])->get();
    $timeline = PageSection::where(['section' => 'timeline'])->get();
    $contacts = PageSection::where(['section' => 'contacts'])->get();
    $sponsors = PageSection::where(['section' => 'sponsors'])->get();
    $menu_login = PageSection::where(['section' => 'menu-login'])->first();
    $menu_registrasi = PageSection::where(['section' => 'menu-registrasi'])->first();

    // dd($menu_login, $menu_registrasi);

    return Inertia::render('LandingPage', [
        'sliders' => $sliders,
        'portrait_sliders' => $portrait_sliders,
        'categories' => $categories,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'deskripsi_lomba' => $deskripsi_lomba,
        'mekanisme_pelaksanaan' => $mekanisme_pelaksanaan,
        'timeline' => $timeline,
        'contacts' => $contacts,
        'menu_login' => $menu_login,
        'menu_registrasi' => $menu_registrasi,
        'sponsors' => $sponsors,
    ]);
  }
}