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
        Schema::create('register_guarantees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_product');
            $table->unsignedBigInteger('id_guarantee');
            $table->string('full_name');
            $table->double('amount', 15, 2);
            $table->string('bill')->nullable();
            $table->string('status')->nullable();
            $table->string('previous_pay_code')->nullable();
            $table->double('other', 15, 2)->nullable();
            $table->string('distribution_city')->nullable();
            $table->string('office')->nullable();
            $table->date('distribution_date')->nullable();
            $table->date('end_date')->nullable();
            $table->date('load_date')->nullable();
            $table->string('credit_type')->nullable();
            $table->double('before_tax', 15, 2)->nullable();
            $table->foreign('id_product')->references('id')->on('products');
            $table->foreign('id_guarantee')->references('id')->on('guarantees');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('register_guarantees');
    }
};
