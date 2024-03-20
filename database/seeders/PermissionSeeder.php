<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
        // permission yang hanya dapat dilakukan oleh user
        $permission_participant = [
            'participant-edit-profile', 
            'participant-upload-receipt', 
            'participant-upload-creation', 
            'participant-download-certificate'
        ];

        // key permission yang dapat dilakukan oleh operator dan admin
        $keys = ['index', 'show', 'create', 'edit', 'update', 'delete'];
        $permission_value = ['user', 'participant', 'language', 'translation', 'category', 'slider', 'level-of-participant', 'creation'];
        // permission yangn hanya bisa dilakukan oleh admin
        $permission_admin = ['role', 'permission',];

        $permission_operator = [];
        $permission_admin_list = [];

        foreach ($keys as $value) {
            foreach ($permission_value as $pv) {
                $permission = $value . "-" . $pv;
                array_push($permission_operator, $permission);
            }
        }

        foreach ($keys as $value) {
            foreach ($permission_admin as $pv) {
                $permission = $value . "-" . $pv;
                array_push($permission_admin_list, $permission);
            }
        }

        // menggabung semua permission yang terdaftar di sistem
        $permission_admin_result = array_merge($permission_operator, $permission_admin_list, $permission_participant);

        $permissions = collect($permission_admin_result)->map(function($permission) {
            return ['name' => $permission, 'guard_name' => 'web'];
        });

        Permission::insert($permissions->toArray());

        Role::create([
            'name' => 'participant'
        ])->givePermissionTo($permission_participant);

        Role::create([
            'name'=> 'operator'
        ])->givePermissionTo($permission_operator);

        Role::create([
            'name' => 'administrator'
        ])->givePermissionTo($permission_admin_result);
    }
}
