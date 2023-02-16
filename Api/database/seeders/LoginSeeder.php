<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\login;

class LoginSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        login::create([
            'user_login' => 'jhonatanpereanez@gmail.com',
            'user_password' => md5('12345'),
            'user_id' => 1,
        ]);
        
    }
}
