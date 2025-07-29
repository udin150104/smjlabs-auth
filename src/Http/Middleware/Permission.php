<?php

namespace Smjlabs\Core\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Smjlabs\Core\Http\Helpers\Permission as PermissionHelper;

class Permission
{
    public function handle(Request $request, Closure $next, string $menuLabelAccess): Response
    {
        // Format: menulabel:access (misal: User:view)
        [$menuLabel, $access] = explode(':', $menuLabelAccess);

        if (!PermissionHelper::can($menuLabel, $access)) {
            abort(403, 'Anda tidak memiliki izin untuk mengakses halaman ini.');
        }

        return $next($request);
    }
}
