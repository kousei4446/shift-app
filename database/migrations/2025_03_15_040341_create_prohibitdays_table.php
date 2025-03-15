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
        Schema::create('prohibitdays', function (Blueprint $table) {
            $table->id();
            $table->date('date')->nullable(); // Add the date column
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('prohibitdays', function (Blueprint $table) {
            // Drop the 'date' column if it exists
            $table->dropColumn('date');
        });

        Schema::dropIfExists('prohibitdays');
    }
};
