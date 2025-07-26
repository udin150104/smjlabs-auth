<?php

namespace Smjlabs\Core\Database\Migrations;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('activity_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable(); // bisa null untuk guest
            $table->string('event'); // nama tindakan, misal 'login', 'create_post'
            $table->string('model_type')->nullable(); // Eloquent model, misal App\Models\Post
            $table->unsignedBigInteger('model_id')->nullable(); // ID model yg dimodifikasi
            $table->text('description')->nullable(); // keterangan tambahan (opsional)
            $table->json('properties')->nullable(); // menyimpan data lama/baru jika perlu
            $table->ipAddress('ip_address')->nullable();
            $table->string('user_agent')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activity_logs');
    }
};
