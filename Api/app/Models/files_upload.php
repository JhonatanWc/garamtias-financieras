<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class files_upload extends Model
{
    use HasFactory;

    protected $fillable = [
        'file',
        'file_type',
        'login_id',
        'status',
    ];
}
