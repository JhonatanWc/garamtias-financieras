<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\people;
class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        people::create([
            'document' => '1036659275',
            'names' => 'Jhonatan Alexander',
            'email' => 'jhonatanpereanez@gmail.com',
        ]);

        people::create([
            'document' => '1013364343',
            'names' => 'Leon mira',
            'email' => 'leonelmirawc@gmail.com',
        ]);
    }
}
