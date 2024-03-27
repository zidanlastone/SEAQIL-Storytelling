<?php

namespace App\Models\Participant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Creation extends Model
{
    use HasFactory;

    protected $fillable = [
        "id_participant",
        "title",
        "upload_location",
        "upload_status",
    ];
}
