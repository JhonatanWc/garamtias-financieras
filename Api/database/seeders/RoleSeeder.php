<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\role;
class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        role::create([
            'role_name' => 'Super Admin',
            'permissions' => '["Crear roles", "Editar roles", "Asignar permisos"]',
        ]);
    }
}
