<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class login extends Model
{
    use HasFactory, HasApiTokens;
    
    protected $fillable = [
        'person_id',
        'menu',
        'password',
        'password_recovery',
        'token',
        'active',
        'ip',
        'last_login',
        'additional_permissions',
        'rol_id',
    ];
}
