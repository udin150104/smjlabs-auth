<?php
namespace Smjlabs\Auth\Database\Migrations;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {        
        Schema::table('users', function (Blueprint $table) {
            $table->string('username')->unique()->after('name');
            $table->tinyInteger('is_active')->after('remember_token');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('username')->after('name');
            $table->dropColumn('is_active')->after('remember_token');
        });
    }
};
