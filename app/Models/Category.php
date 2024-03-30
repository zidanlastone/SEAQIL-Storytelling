<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        "category_name",
        "image",
    ];

    protected $appends = ['image_path'];
    protected function imagePath(): Attribute
    {
        return new Attribute(
            function () {
                return asset('storage/' . $this->image);
            }
        );
    }
}
