<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "type",
        "description",
        "source",
    ];

    protected $appends = ['source_path'];
    protected function sourcePath(): Attribute
    {
        return new Attribute(
            function () {
                return asset('storage/' . $this->source);
            }
        );
    }
}
