<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDateToProhibitdaysTable extends Migration
{
    public function up()
    {
        Schema::table('prohibitdays', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('date')->nullable();  // `date` カラムを追加
        });
    }

    public function down()
    {
        Schema::table('prohibitdays', function (Blueprint $table) {
            $table->dropColumn('date');  // `date` カラムを削除
        });
    }
}
