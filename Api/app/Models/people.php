<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class people extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'document',
        'names',
        'last_names',
        'email',
        'city',
        'address',
        'phone1',
        'phone2',
        'gender',
        'occupation',
        'birthday_date',
        'sector',
        'credit_score',
        'profile',
    ];
}
