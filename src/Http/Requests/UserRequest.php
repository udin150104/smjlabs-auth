<?php

namespace Smjlabs\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true; // sesuaikan jika ingin batasi
  }

  public function rules(): array
  {
    $id = $this->route('user'); // ambil ID dari route, jika ada
    $isUpdate = !is_null($id);

    $passwordRules = $isUpdate
      ? ['nullable', 'string', 'min:8', 'max:100', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/']
      : ['required', 'string', 'min:8', 'max:100', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/'];

    return [
      'name' => ['required', 'string', 'min:8', 'max:100'],
      'username' => [
        'required',
        'string',
        'min:8',
        'max:100',
        Rule::unique('users', 'username')->ignore($id)
      ],
      'email' => [
        'required',
        'string',
        'email',
        'min:8',
        'max:100',
        Rule::unique('users', 'email')->ignore($id)
      ],
      'password' => $passwordRules,
      'role' => ['required'],
    ];
  }

  public function messages(): array
  {
    return [
      'password.regex' => 'Format Kata Sandi harus berupa kombinasi huruf besar, huruf kecil, angka, dan simbol.',
    ];
  }

  public function attributes(): array
  {
    return [
      'role' => 'Role/Peran',
      'username' => 'Username',
      'name' => 'Nama',
      'email' => 'Email',
      'password' => 'Kata Sandi',
    ];
  }
}
