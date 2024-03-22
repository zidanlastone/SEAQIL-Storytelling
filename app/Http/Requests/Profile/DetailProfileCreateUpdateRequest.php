<?php

namespace App\Http\Requests\Profile;


use Illuminate\Foundation\Http\FormRequest;
class DetailProfileCreateUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'gender' => ['required', 'string', 'max:1'],
            'whatsapp_contact' => ['required', 'string'],
            'parent_contact' => ['required', 'string'],
            'institution' => ['required', 'string'],
            'country' => ['required', 'string'],
            'province' => ['required', 'string'],
            'city' => ['required', 'string'],
            'address' => ['required', 'string'],
            'password' => ['required'],
        ];
    }
}
