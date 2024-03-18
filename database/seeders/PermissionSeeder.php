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
        Permission::create(['name' => 'edit-profile']);
        Permission::create(['name' => 'participant-upload-receipt']);
        Permission::create(['name' => 'participant-upload-creation']);
        Permission::create(['name' => 'participant-download-certificate']);

        // key permission yang dapat dilakukan oleh operator dan admin
        $keys = ['index', 'show', 'edit', 'update', 'delete'];
        $permission_value = ['participant', 'language', 'translation', 'category', 'slider', 'level-of-participant', 'creation'];
        // permission yangn hanya bisa dilakukan oleh admin
        $permission_admin = ['role', 'permission'];

        $permission_list = [];
        $permission_admin_list = [];

        foreach ($keys as $value) {
            foreach ($permission_value as $pv) {
                $permission = $value . "-" . $pv;
                Permission::create(['name' => $permission]);
                array_push($permission_list, $permission);
            }
        }

        foreach ($keys as $value) {
            foreach ($permission_admin as $pv) {
                $permission = $value . "-" . $pv;
                Permission::create(['name' => $permission]);
                array_push($permission_admin_list, $permission);
            }
        }

    
        Role::create([
            'name' => 'participant'
        ])->givePermissionTo([
            'participant-edit-profile',
            'participant-upload-receipt',
            'participant-upload-creation',
            'participant-download-certificate'
        ]);

        Role::create([
            'name'=> 'operator'
        ])->givePermissionTo($permission_list);


        // menggabung permission yang dimiliki oleh operator dan permission yang hanya dimiliki oleh admin
        $permission_admin_result = array_merge($permission_list, $permission_admin_list);
        Role::create([
            'name' => 'administrator'
        ])->givePermissionTo($permission_admin_result);
    }
}
