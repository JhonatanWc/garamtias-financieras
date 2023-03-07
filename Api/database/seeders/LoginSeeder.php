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
            'person_id' => 1,
            'password' => md5('123'),
            'rol_id' => 1,
            'active' => 1,
        ]);

        login::create([
            'person_id' => 2,
            'password' => md5('123'),
            'rol_id' => 1,
            'active' => 1,
        ]);
        
    }
}
