<?php

namespace Smjlabs\Auth\Http\Controllers;

use Illuminate\Http\Request;
use Smjlabs\Auth\Models\User;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Smjlabs\Auth\Http\Requests\UpdateProfileRequest;

class ProfileController extends Controller
{
  public function index()
  {
    $title = 'Informasi Profil';
    return view('smjlabsauth::profile.index',compact('title'));
  }

  public function edit(Request $request, User $id)
  {
    $title = 'Form Profil';
    return view('smjlabsauth::profile.form',compact('title'));
  }

  public function update(UpdateProfileRequest $request, User $profile)
  {
    try {
      $profile->name = $request->name;
      $profile->email = $request->email;
      $profile->username = $request->username;
      if($request->has('password') && $request->filled('password')){
        $profile->password = $request->password;
      }
      $profile->update();

      return redirect()->route('page.profile.index')->with('success',' Data berhasil diperbaharui');
    } catch (\Throwable $th) {
      return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
    }
  }
}