<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shift extends Model
{
    use HasFactory;

    // マスアサインメントを許可するカラムを指定
    protected $fillable = [
        'date',  // 日付を保存するカラム
        'user_id',  // ユーザーIDを保存するカラム（必要な場合）
    ];

    // userリレーションを修正
    public function user() // belongsToに修正
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
