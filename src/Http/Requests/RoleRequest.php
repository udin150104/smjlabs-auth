<?php

namespace Smjlabs\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RoleRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true; // sesuaikan jika ingin batasi
  }

  public function rules(): array
  {
    $id = $this->route('role'); // ambil ID dari route, jika ada
    return [
      'name' => ['required', 'string', 'min:3', 'max:100', Rule::unique('roles', 'name')->ignore($id, 'id')]
    ];
  }

  public function messages(): array
  {
    return [];
  }

  public function attributes(): array
  {
    return [
      'name' => 'Role/Peran',
    ];
  }
}
