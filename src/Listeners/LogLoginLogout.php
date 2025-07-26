<?php

namespace Smjlabs\Core\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Logout;
use Illuminate\Support\Facades\Request;
use Smjlabs\Core\Models\ActivityLog;

class LogLoginLogout
{
    public function handle($event)
    {
        $action = $event instanceof Login ? 'login' : 'logout';

        ActivityLog::create([
            'user_id' => $event->user->id,
            'event' => $action,
            'description' => ucfirst($action) . ' oleh user #' . $event->user?->username ?? $event->user?->email,
            'ip_address' => Request::ip(),
            'user_agent' => Request::userAgent(),
        ]);
    }
}
