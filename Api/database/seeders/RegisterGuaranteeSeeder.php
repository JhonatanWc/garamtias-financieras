<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\register_guarantee;

class RegisterGuaranteeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $register_guarantee = register_guarantee::create([
            'id_product' => 1,
            'id_guarantee' => 1,
            'full_name' => "jhonatan Alexander Pereañez Aguirre",
            'amount' => 100000,
        ]);
        $register_guarantee = register_guarantee::create([
            'id_product' => 1,
            'id_guarantee' => 2,
            'full_name' => "Leonel mira",
            'amount' => 200000,
        ]);
        $register_guarantee = register_guarantee::create([
            'id_product' => 1,
            'id_guarantee' => 3,
            'full_name' => "Ana judith",
            'amount' => 500000,
        ]);
    }
}
