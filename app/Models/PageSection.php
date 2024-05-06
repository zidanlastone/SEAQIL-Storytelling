<?php

namespace App\Models;

use App\Models\I18n\Language;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageSection extends Model
{
    use HasFactory;

    public function language(){
        return $this->belongsTo(Language::class, 'language_id');
    }
}
