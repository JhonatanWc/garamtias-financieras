<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        $this->call(PersonSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(LoginSeeder::class);
        $this->call(RelationsSeeder::class);
        $this->call(GuaranteeSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(RegisterGuaranteeSeeder::class);
    }
}
