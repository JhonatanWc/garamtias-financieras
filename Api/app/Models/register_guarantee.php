<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class register_guarantee extends Model
{
    use HasFactory;

    protected $fillable = [
       'id_product',
       'id_guarantee',
       'bill',
       'full_name',
       'amount',
       'previous_pay_code',
       'other',
       'distribution_city',
       'office',
       'distribution_date',
       'end_date',
       'load_date',
       'credit_type',
       'before_tax',
       'status',
    ];
}
