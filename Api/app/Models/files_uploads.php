<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class files_uploads extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'file_type',
        'user_id',
        'status',
    ];
}
