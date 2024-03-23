<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        "language_code",
        "name",
        "route",
        "guard",
        "icon",
        "parent_menu",
        "roles"
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
