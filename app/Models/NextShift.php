<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NextShift extends Model
{
    protected $fillable = [
        'date',  // 日付を保存するカラム
        'user_id',  // ユーザーIDを保存するカラム（必要な場合）
    ];
}
