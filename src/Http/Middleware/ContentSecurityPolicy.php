<?php

namespace Smjlabs\Auth\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ContentSecurityPolicy
{
  public function handle(Request $request, Closure $next)
  {
    $response = $next($request);

    if (config('smjlabsauth.development') == true) {
      $policy = implode('; ', [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: http://localhost:5173 https://cdn.jsdelivr.net https://unpkg.com",
        "style-src 'self' 'unsafe-inline' http://localhost:5173 https://cdn.jsdelivr.net",
        "img-src 'self' data: https:",
        "font-src 'self' https://fonts.gstatic.com",
        "connect-src 'self' ws://localhost:5173 http://localhost:5173",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ]) . ';';
    } else {
      $policy = implode('; ', [
        "default-src 'self'",
        "script-src 'self' https://cdn.jsdelivr.net https://unpkg.com",
        "style-src 'self' https://cdn.jsdelivr.net",
        "img-src 'self' data: https:",
        "font-src 'self' https://fonts.gstatic.com",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ]) . ';';
    }

    // Header keamanan tambahan (berlaku untuk semua environment)
    $response->headers->set('X-XSS-Protection', '1; mode=block');
    $response->headers->set('X-Content-Type-Options', 'nosniff');
    $response->headers->set('X-Frame-Options', 'SAMEORIGIN'); // atau DENY
    $response->headers->set('Referrer-Policy', 'no-referrer-when-downgrade');
    $response->headers->set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    $response->headers->set('Content-Security-Policy', $policy);

    return $response;
  }
}
