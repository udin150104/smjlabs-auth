<?php

namespace Smjlabs\Core\Http\Controllers;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
  public function index()
  {
    $title = 'Dashboard';
    return view('smjlabscore::dasboard.index',compact('title'));
  }
}