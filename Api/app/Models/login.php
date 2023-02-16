<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class login extends Model
{
    use HasFactory, HasApiTokens;
    
    protected $fillable = [
        'user_login',
        'user_password',
        'user_id'
    ];
}
