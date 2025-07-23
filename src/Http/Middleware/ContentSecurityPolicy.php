<?php

namespace Smjlabs\Auth\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ContentSecurityPolicy
{
  public function handle(Request $request, Closure $next)
  {
    $response = $next($request);

    $policy = implode('; ',  [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://unpkg.com https://cdn.jsdelivr.net http://localhost:5173",
      "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net localhost:5173",
      "img-src 'self' data: https:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' ws://localhost:5173 http://localhost:5173",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ]) . ';';

    $response->headers->set('Content-Security-Policy', $policy);

    return $response;
  }
}
