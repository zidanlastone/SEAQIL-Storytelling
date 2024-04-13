<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'gender',
        'whatsapp_contact',
        'parent_contact',
        'institution',
        'country',
        'province',
        'city',
        'address',
        'pwd',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        // 'pwd',
    ];

    protected function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
