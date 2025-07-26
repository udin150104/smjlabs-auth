<?php
namespace Smjlabs\Core\Listeners;

use Illuminate\Auth\Events\Failed;
use Illuminate\Support\Facades\Request;
use Smjlabs\Core\Models\ActivityLog;

class LogFailedLogin
{
    public function handle(Failed $event)
    {
        $credentials = Request::only(['email', 'username']); // tergantung field login Anda
        $description = 'Percobaan login gagal';

        if ($event->user) {
            $description .= ' oleh user terdaftar #' . ($credentials['email'] ?? '-');
        } else {
            $description .= ' dengan inisial akses : ' . ($credentials['email'] ?? '-');
        }

        ActivityLog::create([
            'user_id' => optional($event->user)->id, // null jika tidak ditemukan
            'event' => 'login_failed',
            'description' => $description,
            'properties' => ['inisial akses' => $credentials['email']],
            'ip_address' => Request::ip(),
            'user_agent' => Request::userAgent(),
        ]);
    }
}
