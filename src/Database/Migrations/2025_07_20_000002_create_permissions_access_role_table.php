<?php
namespace Smjlabs\Core\Database\Migrations;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('permissions_access_role', function (Blueprint $table) {
            $table->string('menu_label')->comment("Label Menu");
            $table->string('access')->comment("Label Menu");
            $table->foreignId('role_id')->constrained()->onDelete('cascade');
            $table->timestamps();
            $table->primary(['menu_label','access','role_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('permissions_access_role');
    }
};
