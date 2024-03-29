<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ExternalServiceConfig\StoreExternalServiceConfigRequest;
use App\Http\Requests\ExternalServiceConfig\UpdateExternalServiceConfigRequest;
use App\Models\ExternalServiceConfig;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ExternalServiceConfigController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $configs = ExternalServiceConfig::all();
        return Inertia::render('ExternalServiceConfig/List', [
            'configs' => $configs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return to_route('admin.external-service-config.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreExternalServiceConfigRequest $request)
    {
        //
        $externalServiceConfig = new ExternalServiceConfig();
        $externalServiceConfig->service_name = $request->service_name;
        $externalServiceConfig->protocol = $request->protocol;
        $externalServiceConfig->host = $request->host;
        $externalServiceConfig->port = $request->port;
        $externalServiceConfig->timeout = $request->timeout;
        $externalServiceConfig->username = $request->username;
        $externalServiceConfig->password = $request->password;
        $externalServiceConfig->save();

        return to_route('admin.external-service-config.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(ExternalServiceConfig $externalServiceConfig)
    {
        //
        return to_route('admin.external-service-config.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ExternalServiceConfig $externalServiceConfig)
    {
        //
        return to_route('admin.external-service-config.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExternalServiceConfigRequest $request, ExternalServiceConfig $externalServiceConfig)
    {
        // update data
        $externalServiceConfig->service_name = $request->service_name;
        $externalServiceConfig->protocol = $request->protocol;
        $externalServiceConfig->host = $request->host;
        $externalServiceConfig->port = $request->port;
        $externalServiceConfig->timeout = $request->timeout;
        $externalServiceConfig->username = $request->username;
        $externalServiceConfig->password = $request->password;

        $externalServiceConfig->save();

        return to_route('admin.external-service-config.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ExternalServiceConfig $externalServiceConfig)
    {
        $externalServiceConfig->delete();
        return to_route('admin.external-service-config.index');
    }
}
