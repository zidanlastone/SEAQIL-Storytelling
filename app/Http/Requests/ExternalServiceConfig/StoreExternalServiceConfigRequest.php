<?php

namespace App\Http\Requests\ExternalServiceConfig;

use Illuminate\Foundation\Http\FormRequest;

class StoreExternalServiceConfigRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            "service_name" => ["required", "string"],
            "protocol" => ["required", "string"],
            "host" => ["required", "string"],
            "port" => ["required", "number"],
            "timeout" => ["required", "number"],
            "username" => ["required", "string"],
            "password" => ["required", "string"],
        ];
    }
}
