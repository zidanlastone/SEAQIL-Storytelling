<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Menu;
use App\Models\I18n\Language;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $language = Language::create([
            "name" => "Indonesia",
            "code" => "ID",
            "is_deleted" => '0'
        ]);

        // Indonesian Menu for participant
        $participant_menu = [
            [
                'language_id' => $language->id,
                'name' => 'Dashboard',
                'route' => 'dashboard',
                'guard' => 'web',
                'roles' => 'participant'
            ],
            [
                'language_id' => $language->id,
                'name' => 'Registrasi Lomba',
                'route' => 'participation.index',
                'guard' => 'web',
                'roles' => 'participant'
            ],
            [
                'language_id' => $language->id,
                'name' => 'Kreasi',
                'route' => 'creation.index',
                'guard' => 'web',
                'roles' => 'participant'
            ],
        ];

        // Indonesian Menu for operator and admin
        $operator_and_admin_menu = [
            [
                'language_id' => $language->id,
                'name' => 'Dashboard',
                'route' => 'dashboard',
                'guard' => 'web',
            ],
            [
                'language_id' => $language->id,
                'name' => 'Partisipan Lomba',
                'route' => 'participant.index',
                'guard' => 'web',
            ],
            [
                'language_id' => $language->id,
                'name' => 'Kreasi Partisipan',
                'route' => 'creation.index',
                'guard' => 'web',
            ],
            [
                'language_id' => $language->id,
                'name' => 'Tingkatan Pendidikan',
                'route' => 'level-of-participant.index',
                'guard' => 'web',
            ],
            [
                'language_id' => $language->id,
                'name' => 'Kategori',
                'route' => 'category.index',
                'guard' => 'web',
            ],
            [
                'language_id' => $language->id,
                'name' => 'Slider',
                'route' => 'slider.index',
                'guard' => 'web',
            ],
            [
                'language_id' => $language->id,
                'name' => 'Bahasa',
                'route' => 'language.index',
                'guard' => 'web',
            ],
            // [
            //     'language_id' => $language->id,
            //     'name' => 'Laman',
            //     'route' => 'page.index',
            //     'guard' => 'web',
            // ],
        ];

        $operator_menu = collect($operator_and_admin_menu)->map(function ($item) {
            $item['roles'] = 'operator';
            return $item;
        })->toArray();

        $additional_admin_menu = [
            [
                'language_id' => $language->id,
                'name' => 'Pengguna',
                'route' => 'admin.users.index',
                'guard' => 'web',
            ],
            [
                'language_id' => $language->id,
                'name' => 'Role',
                'route' => 'admin.role.index',
                'guard' => 'web',
            ],
            [
                'language_id' => $language->id,
                'name' => 'Permission',
                'route' => 'admin.permission.index',
                'guard' => 'web',
            ],
            [
                'language_id' => $language->id,
                'name' => 'External Service Configuration',
                'route' => 'admin.external-service-config.index',
                'guard' => 'web',
            ],
        ];

        $admin_menu = collect(array_merge($operator_and_admin_menu, $additional_admin_menu))->map(function ($item) {
            $item['roles'] = 'administrator';
            return $item;
        })->toArray();

        Menu::insert($operator_menu);
        Menu::insert($participant_menu);
        Menu::insert($admin_menu);
    }
}
