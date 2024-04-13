<?php

namespace App\Models\Participant;

use App\Models\User;
use App\Models\Category;
use App\Models\I18n\Language;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Participant extends Model
{
    use HasFactory, SoftDeletes;

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
        'reject_reason',
        'is_deleted'
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

    protected $appends = ['payment_receipt_path'];
    protected function paymentReceiptPath(): Attribute
    {
        return new Attribute(
            function () {
                return asset('storage/' . $this->payment_receipt);
            }
        );
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function creation()
    {
        return $this->hasOne(Creation::class, 'id_participant');
    }

    public function level_of_participant()
    {
        return $this->belongsTo(LevelOfParticipant::class, 'level_of_participant_id');
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
