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
        // Schema::create('files_uploads', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->string('file_type');
        //     $table->unsignedBigInteger('user_id');
        //     $table->boolean('status')->nullable();
        //     $table->foreign('user_id')->references('id')->on('users');
        //     $table->unsignedInteger('available_at');
        //     $table->unsignedInteger('created_at');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
