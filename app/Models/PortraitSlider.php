<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortraitSlider extends Model
{
    use HasFactory;

    protected $table = 'portrait_sliders';
    protected $fillable = [
        "title",
        "type",
        "description",
        "source",
    ];
}
