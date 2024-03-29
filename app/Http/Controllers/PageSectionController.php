<?php

namespace App\Http\Controllers;

use App\Http\Requests\PageSection\StorePageSectionRequest;
use App\Http\Requests\PageSection\UpdatePageSectionRequest;
use App\Models\I18n\Language;
use App\Models\PageSection;
use Inertia\Inertia;

class PageSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $pageSection = PageSection::all();
        $languages = Language::all();
        return Inertia::render("PageSection/List", [
            "page_sections" => $pageSection,
            "languages" => $languages
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return to_route('admin.page_section.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePageSectionRequest $request)
    {
        //
        $pageSection = new PageSection();
        $pageSection->language_id = $request->language_id;
        $pageSection->section = $request->section;
        $pageSection->content = $request->content;
        $pageSection->save();

        return to_route('admin.page_section.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(PageSection $pageSection)
    {
        //
        return to_route('admin.page_section.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PageSection $pageSection)
    {
        //
        return to_route('admin.page_section.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePageSectionRequest $request, PageSection $pageSection)
    {
        //
        $pageSection->language_id = $request->language_id;
        $pageSection->section = $request->section;
        $pageSection->content = $request->content;
        $pageSection->save();

        return to_route('admin.page_section.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PageSection $pageSection)
    {
        //
        $pageSection->delete();
        return to_route('admin.page_section.index');
    }
}
