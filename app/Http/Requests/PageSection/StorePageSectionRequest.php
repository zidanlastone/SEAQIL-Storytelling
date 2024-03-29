<?php

namespace App\Http\Requests\PageSection;

use Illuminate\Foundation\Http\FormRequest;

class StorePageSectionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if ($this->user()->hasRole("administrator") || $this->user()->hasRole("operator")) {
            return true;
        }
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "section" => ["required", "string"],
            "content" => ["required", "string"],
        ];
    }
}
