<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\guarantee;

class GuaranteeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guarantee = guarantee::create([
            'document' => '1036659275',
            'nit' => '900575179',
            'pay_code' => 'V0012411P',
        ]);

        $guarantee = guarantee::create([
            'document' => '1013364343',
            'nit' => '900575179',
            'pay_code' => 'V0022411P',
        ]);
        $guarantee = guarantee::create([
            'document' => '21835182',
            'nit' => '900575179',
            'pay_code' => 'V0032411P',
        ]);
    }
}
