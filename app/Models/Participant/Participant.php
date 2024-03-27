<?php

namespace App\Models\Participant;

use App\Models\User;
use App\Models\Category;
use App\Models\I18n\Language;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Participant extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'category_id',
        'language_id',
        'level_of_participant_id',
        'payment_receipt',
        'certificate',
        'status_verifikasi',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
    public function creation()
    {
        return $this->hasMany(Creation::class);
    }

    public function level_of_participant()
    {
        return $this->belongsTo(LevelOfParticipant::class);
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
