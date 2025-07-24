<?php

namespace Smjlabs\Core\Http\Controllers;

use Illuminate\Http\Request;
use Smjlabs\Core\Models\User;
use App\Http\Controllers\Controller;
use Smjlabs\Core\Http\Requests\UpdateProfileRequest;

class ProfileController extends Controller
{
  public function index()
  {
    $title = 'Informasi Profil';
    return view('smjlabscore::profile.index',compact('title'));
  }

  public function edit(Request $request, User $profile)
  {
    if(auth()->user()->id !== $profile->id){
      abort(404);
    }
    $title = 'Form Profil';
    return view('smjlabscore::profile.form',compact('title'));
  }

  public function update(UpdateProfileRequest $request, User $profile)
  {
    if(auth()->user()->id !== $profile->id){
      abort(404);
    }
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