<?php

namespace App\Http\Controllers\I18n;

use App\Http\Controllers\Controller;
use App\Http\Requests\I18n\StoreLanguageRequest;
use App\Http\Requests\I18n\UpdateLanguageRequest;
use App\Models\I18n\Language;

use Inertia\Inertia;

class LanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $languages = Language::all();
        return Inertia::render('Language/List', [
            'languages' => $languages
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return to_route('language.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLanguageRequest $request)
    {
        //
        $language = new Language();
        $language->code = $request->code;
        $language->name = $request->name;
        $language->save();
        return to_route('language.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Language $language)
    {
        //'
        return to_route('language.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Language $language)
    {
        //
        return to_route('language.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLanguageRequest $request, Language $language)
    {
        //
        $language->code = $request->code;
        $language->name = $request->name;
        $language->save();
        return to_route('language.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Language $language)
    {
        //
        $language->delete();
        return to_route('language.index');
    }
}
