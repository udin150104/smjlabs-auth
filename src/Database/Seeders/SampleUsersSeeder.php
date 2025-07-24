<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Smjlabs\Core\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Smjlabs\Core\Models\User;

class SampleUsersSeeder extends Seeder
{
  public function run(): void
  {
    if (Schema::hasTable('roles')) {
      Role::updateOrCreate([
        'id' => 1,
      ], [
        'name' => 'Administrator',
        'slug' => Str::slug('Administrator'),
        'created_at' => now(),
        'updated_at' => now(),
      ]);
    }

    if (Schema::hasTable('users')) {
      $user = User::updateOrCreate([
        'id' => 1
      ],[
        'name' => 'Noura Fajr',
        'username' => 'nourafajr',
        'email' => 'nourafajr@developer.com',
        'password' => Hash::make('Adm!n1s7*ratOr'),
        'email_verified_at' => now(),
        'is_active' => 1,
        'created_at' => now(),
        'updated_at' => now(),
      ]);

      $user->roles()->sync(1);
    }
  }
}
