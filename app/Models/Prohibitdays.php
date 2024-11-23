<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prohibitdays extends Model
{
    use HasFactory;

    // fillable プロパティに `date` を追加
    protected $fillable = ['date'];
}
