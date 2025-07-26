<?php

namespace Smjlabs\Core\Models;

use Smjlabs\Core\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
  use LogsActivity;
  /**
   * Summary of table
   * @var string
   */
  protected $table = 'roles';
  /**
   * Summary of fillable
   * @var array
   */
  protected $fillable = ['name','slug'];
  /**
   * Summary of casts
   * @var array
   */
  protected $casts = [
    'created_at' => 'datetime',
    'updated_at' => 'datetime',
  ];
  /**
   * Summary of users
   * @return BelongsToMany<User, Role, \Illuminate\Database\Eloquent\Relations\Pivot>
   */
  public function users(): BelongsToMany
  {
    return $this->belongsToMany(User::class, 'role_user', 'role_id', 'user_id');
  }

  /**
   * Summary of shouldLog
   * @param mixed $event
   * @return bool
   */
  public function shouldLog($event): bool
  {
    // Anda bisa atur logika berdasarkan event, atribut, atau kondisi model
    return in_array($event, ['created', 'updated', 'deleted']);
  }
  /**
   * Summary of getLoggableAttributes
   * @return string[]
   */
  public function getLoggableAttributes(): array
  {
    // hanya field ini yang akan dicatat
    return ['name', 'slug']; 
  }
}
