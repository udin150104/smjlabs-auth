<?php

namespace Smjlabs\Core\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Smjlabs\Core\Models\ActivityLog;

class LogPageAccess
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        // Kecualikan route tertentu (opsional)
        if ($request->is('assets/*') || $request->is('smjlabs-core-assets/*') || $request->ajax()) {
            return $response;
        }

        // Deskripsi halaman (opsional: berdasarkan route name, path, atau title)
        $description = 'Mengakses : ' . $request->path();

        ActivityLog::create([
            'user_id'     => Auth::user()->id,
            'event'       => 'page_visited',
            'description' => $description,
            'ip_address'  => $request->ip(),
            'user_agent'  => $request->userAgent(),
        ]);

        return $response;
    }
}
