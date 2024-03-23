<?php

namespace App\Models\I18n;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    protected $table = 'i18n_language';

    protected $fillable = [
        'code',
        'name',
        'is_deleted',
    ];
}
