<?php

namespace Smjlabs\Auth\Http\Controllers;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
  public function index()
  {
    $title = 'Dashboard';
    return view('smjlabsauth::dasboard.index',compact('title'));
  }
}