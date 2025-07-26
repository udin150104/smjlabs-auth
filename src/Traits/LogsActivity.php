<?php

namespace Smjlabs\Core\Traits;

use Smjlabs\Core\Services\ActivityLogger;

trait LogsActivity
{
  public static function bootLogsActivity()
  {
    static::created(function ($model) {
      if (method_exists($model, 'shouldLog') && !$model->shouldLog('created')) return;

      $attributes = method_exists($model, 'getLoggableAttributes')
        ? $model->only($model->getLoggableAttributes())
        : $model->getAttributes();

      ActivityLogger::log('created', $model, 'Data dibuat', [
        'after' => $attributes
      ]);
    });

    static::updated(function ($model) {
      if (method_exists($model, 'shouldLog') && !$model->shouldLog('updated')) return;

      $dirty = $model->getDirty();
      $loggable = method_exists($model, 'getLoggableAttributes')
        ? $model->getLoggableAttributes()
        : array_keys($dirty); // default: semua perubahan

      $filteredDirty = array_intersect_key($dirty, array_flip($loggable));
      $original = array_intersect_key($model->getOriginal(), $filteredDirty);

      if (empty($filteredDirty)) return; // tidak ada perubahan pada field yg diizinkan

      ActivityLogger::log('updated', $model, 'Data diperbarui', [
        'before' => $original,
        'after' => $filteredDirty,
      ]);
    });

    static::deleted(function ($model) {
      if (method_exists($model, 'shouldLog') && !$model->shouldLog('deleted')) return;
      $attributes = method_exists($model, 'getLoggableAttributes')
        ? $model->only($model->getLoggableAttributes())
        : $model->getAttributes();
      ActivityLogger::log('deleted', $model, 'Data dihapus', [
        'before' => $attributes
      ]);
    });
  }
}
