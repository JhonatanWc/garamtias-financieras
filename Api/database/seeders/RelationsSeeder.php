<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\relation;

class RelationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $relation = relation::create([
            'person1' => 1,
            'type_relation' => 'Usuario Crediticio',
            'person2' => 1,
        ]);
    }
}
