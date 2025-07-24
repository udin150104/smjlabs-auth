<?php

namespace Smjlabs\Core\Http\Controllers;

use Illuminate\Http\Request;
use Smjlabs\Core\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
  /**
   * Summary of index
   * @return \Illuminate\Contracts\View\View
   */
  public function index()
  {
    return view('smjlabscore::access.index');
  }
  /**
   * Summary of store
   * @param \Illuminate\Http\Request $request
   * @return float|int|\Illuminate\Http\RedirectResponse
   */
  public function store(Request $request)
  {
    $credentials = $request->validate([
      'email' => ['required', 'string'],
      'password' => ['required', 'string'],
    ]);

    $loginField = filter_var($credentials['email'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

    $user = User::where($loginField, $credentials['email'])->first();

    if (!$user) {
      return back()->with('error', 'Akun tidak ditemukan.')->withInput();
    }

    if ($user->is_active < 1) {
      return back()->with('error', 'Akun Anda tidak aktif.')->withInput();
    }

    if (Auth::attempt([
      $loginField => $credentials['email'],
      'password' => $credentials['password']
    ], $request->filled('remember'))) {

      $request->session()->regenerate();
      return redirect()->intended(config('smjlabscore.redirect_after_login'));
    }
    return redirect()->route('acc.login.index')->with('error', 'Inisial akses atau kata sandi salah. silahkan coba lagi')->withInput();
  }
  /**
   * Summary of logout
   * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
   */
  public function logout()
  {
    Auth::logout();
    request()->session()->invalidate();
    request()->session()->regenerateToken();

    return redirect(config('smjlabscore.login_route'));
  }
}
