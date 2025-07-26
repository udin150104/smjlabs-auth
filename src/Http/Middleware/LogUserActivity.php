<?php

namespace Smjlabs\Core\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Smjlabs\Core\Models\ActivityLog;

class LogUserActivity
{
  /**
   * Summary of handle
   * @param mixed $request
   * @param \Closure $next
   */
  public function handle($request, Closure $next)
  {
    if (Auth::check()) {
      ActivityLog::create([
        'user_id'    => Auth::user()->id,
        'event'      => 'access',
        'method'     => $request->method(),
        'url'        => $request->fullUrl(),
        'ip_address' => $request->ip(),
        'user_agent' => $request->userAgent(),
        'description' => 'Mengakses halaman ' . $request->path(),
      ]);
    }

    return $next($request);
  }
}
