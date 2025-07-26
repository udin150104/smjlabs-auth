<?php

namespace Smjlabs\Core\Models;

use App\Models\User as UserBaseModel;
use Smjlabs\Core\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class User extends UserBaseModel
{
  use LogsActivity;
  /**
   * Summary of __construct
   */
  public function __construct()
  {
    parent::__construct();
  }
  /**
   * The attributes that are mass assignable.
   *
   * @var list<string>
   */
  protected $fillable = [
    'name',
    'email',
    'password',
    'username',
    'is_active'
  ];

  /**
   * Summary of roles
   * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<Role, User, \Illuminate\Database\Eloquent\Relations\Pivot>
   */
  public function roles(): BelongsToMany
  {
    return $this->belongsToMany(Role::class, 'role_user', 'user_id', 'role_id');
  }
  /**
   * Summary of hasRole
   * @param string $roleName
   * @return bool
   */
  public function hasRole(string $roleName): bool
  {
    return $this->roles()->where('name', $roleName)->exists();
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
    return ['name', 'email','username','is_active']; 
  }
}
