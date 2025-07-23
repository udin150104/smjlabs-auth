<?php

namespace Smjlabs\Auth\Http\Helpers;

use Smjlabs\Auth\Models\Role;
use Smjlabs\Auth\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class Permission
{
  /**
   * Summary of check
   * @param string $label
   * @param string $access
   * @param string $rolename
   * @return bool
   */
  public static function check(string $label, string $access, string $rolename)
  {
    $role = Role::firstOrCreate(['name' => $rolename]);
    $roleId = $role->id;

    $find = DB::table('permissions_access_role')->where([
      'menu_label' => $label,
      'access' => $access,
      'role_id' => $roleId,
    ])->exists();
    return $find;
  }
  /**
   * Summary of checkbyUser
   * @param string $label
   * @param string $access
   * @param string $userid
   * @return bool
   */
  public static function checkbyUser(string $label, string $access, string $userid)
  {
    $find = DB::table('permissions_access_user')->where([
      'menu_label' => $label,
      'access' => $access,
      'user_id' => $userid,
    ])->exists();
    return $find;
  }
  /**
   * Summary of can
   * @param string $menuLabel
   * @param string $access
   * @return bool
   */
  public static function can(string $menuLabel, string $access): bool
  {
    $id = Auth::user()->id;
    $user = User::find($id);

    if (!$user) return false;
    // dd($user);
    // Jika user memiliki role 'administrator' → akses penuh
    if ($user->roles && $user->roles->first()->slug === 'administrator') {
      return true;
    }

    // Cek dari permissions_access_user
    $hasUserPermission = DB::table('permissions_access_user')
      ->where('menu_label', $menuLabel)
      ->where('access', $access)
      ->where('user_id', $user->id)
      ->exists();

    if ($hasUserPermission) {
      return true;
    }

    // Cek dari permissions_access_role
    if ($user->roles->first()->id) {
      $hasRolePermission = DB::table('permissions_access_role')
        ->where('menu_label', $menuLabel)
        ->where('access', $access)
        ->where('role_id', operator: $user->roles->first()->id)
        ->exists();

      if ($hasRolePermission) {
        return true;
      }
    }

    return false;
  }
  
}
