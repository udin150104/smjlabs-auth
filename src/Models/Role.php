<?php

namespace Smjlabs\Auth\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
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
}
