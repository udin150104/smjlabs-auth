<?php

namespace Smjlabs\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ActivityLog extends Model
{
  /**
   * Summary of table
   * @var string
   */
  protected $table = 'activity_logs';
  /**
   * Summary of fillable
   * @var array
   */
  protected $fillable = [
    'user_id',
    'event',
    'model_type',
    'model_id',
    'description',
    'properties',
    'ip_address',
    'user_agent'
  ];
  /**
   * Summary of casts
   * @var array
   */
  protected $casts = [
    'properties' => 'array',
    'created_at' => 'datetime',
    'updated_at' => 'datetime',
  ];
  /**
   * Summary of users
   * @return BelongsTo<User, ActivityLog>
   */
  public function users(): BelongsTo
  {
    return $this->belongsTo(User::class, 'user_id', 'id');
  }
  /**
   * Summary of subject
   * @return \Illuminate\Database\Eloquent\Relations\MorphTo<Model, ActivityLog>
   */
  public function subject()
  {
    return $this->morphTo(null, 'model_type', 'model_id');
  }
}
