<?php

namespace Smjlabs\Auth\Models;

use App\Models\User as UserBaseModel;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class User extends UserBaseModel
{
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
}
