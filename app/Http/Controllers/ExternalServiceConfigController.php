<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExternalServiceConfig\StoreExternalServiceConfigRequest;
use App\Http\Requests\ExternalServiceConfig\UpdateExternalServiceConfigRequest;
use App\Models\ExternalServiceConfig;

class ExternalServiceConfigController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreExternalServiceConfigRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ExternalServiceConfig $externalServiceConfig)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ExternalServiceConfig $externalServiceConfig)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExternalServiceConfigRequest $request, ExternalServiceConfig $externalServiceConfig)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ExternalServiceConfig $externalServiceConfig)
    {
        //
    }
}
