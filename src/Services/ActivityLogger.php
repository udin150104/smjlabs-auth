<?php

namespace Smjlabs\Core\Services;

use Smjlabs\Core\Models\ActivityLog;
use Illuminate\Support\Facades\Request;

class ActivityLogger
{
    public static function log(string $event, $model = null, ?string $description = null, array $properties = [])
    {
        return ActivityLog::create([
            'user_id' => auth()->user()->id,
            'event' => $event,
            'model_type' => $model ? get_class($model) : null,
            'model_id' => $model->id ?? null,
            'description' => $description,
            'properties' => $properties,
            'ip_address' => Request::ip(),
            'user_agent' => Request::header('User-Agent'),
        ]);
    }
}
