<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

use App\Models\User;

class RegisterParticipantRequest extends FormRequest
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
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  public function rules(): array
  {
    return [
      'name' => 'required|string|max:255',
      'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
      'password' => ['required', 'confirmed', Rules\Password::defaults()],

      // detail information profile
      'gender' => ['required'],
      'whatsapp_contact' => ['required'],
      'parent_contact' => ['nullable'],
      'institution' => ['nullable'],
      'country' => ['required', 'string'],
      'province' => ['required', 'string'],
      'city' => ['required', 'string'],
      'address' => ['required', 'string'],

      // event registration
      'category_id' => ['required'],
      'language_id' => ['required'],
      'level_of_participant_id' => ['nullable'],
      'payment_receipt' => ['required', 'mimetypes:application/pdf,image/jpeg,image/png,image/bmp'],
      'title' => ['required', 'string'],
    ];
  }
}
