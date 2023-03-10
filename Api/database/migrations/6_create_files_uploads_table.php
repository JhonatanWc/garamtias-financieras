<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('files_uploads', function (Blueprint $table) {
            $table->id();
            $table->longText('file');
            $table->string('file_type');
            $table->unsignedBigInteger('login_id');
            $table->foreign('login_id')->references('id')->on('logins');
            $table->boolean('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('files_uploads');
    }
};
