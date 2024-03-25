<?php

use App\Models\User;
use App\Models\Category;
use App\Models\I18n\Language;
use App\Models\Participant\LevelOfParticipant;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('participants', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(Category::class, 'category_id'); // untuk kategori lomba yang di ikuti
            $table->foreignIdFor(Language::class, 'language_id'); // foreign ke untuk bahasa yang dipilih
            $table->foreignIdFor(LevelOfParticipant::class, 'level_of_participant_id')->nullable(); // untuk menyimpan data jenjang pendidikan peserta
            $table->string('payment_receipt')->nullable();              // untuk url foto bukti bayar yang sudah di upload
            $table->string('certificate')->nullable();                  // untuk url google drive sertgifikat yang diterima oleh peserta
            $table->enum('status_verifikasi', ['0', '1']);  // untuk menunjukan bahwa peserta sudah di verifikasi
            $table->enum('is_deleted', ['0', '1']);         // mengindikasikan data di hapus
            $table->softDeletes();                          // waktu penghapusan data
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participants');
    }
};
