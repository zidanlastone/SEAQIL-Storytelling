<?php

namespace App\Http\Requests\Participant;

use Illuminate\Foundation\Http\FormRequest;

class UpdateParticipantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if ($this->user()->can("create.participant")) {
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
            'user_id' => ['required'],
            'category_id' => ['required'],
            'language_id' => ['required'],
            'level_of_participant_id' => ['nullable'],
            'payment_receipt' => 'nullable|image|mimes:jpeg,jpg,png,gif',
            'certificate' => ['nullable'],
            'status_verifikasi' => ['required'],
            'reject_reason' => ["nullable"]
        ];
    }
}
