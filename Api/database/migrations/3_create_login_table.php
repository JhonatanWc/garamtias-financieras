<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logins', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('person_id');
            $table->boolean('menu')->nullable();
            $table->string('password', 100);
            $table->string('password_recovery', 100)->nullable();
            $table->string('token')->nullable();
            $table->boolean('active')->nullable();
            $table->string('ip')->nullable();
            $table->string('last_login')->nullable();
            $table->longText('additional_permissions')->nullable();
            $table->unsignedBigInteger('rol_id');
            $table->foreign('person_id')->references('id')->on('people');
            $table->foreign('rol_id')->references('id')->on('roles');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('logins');
    }
};
