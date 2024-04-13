<?php

use App\Models\Participant\Participant;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('creations', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Participant::class, 'id_participant');
            $table->string('title');                      // untuk judul karya yang di upload
            $table->string('upload_location')->nullable();// untuk link lokasi file peserta mengupload karyanya, preferensi google drive
            $table->enum('upload_status', ['0', '1']);    // untuk menetukan apakah peserta sudah melakukan upload karya
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('creations');
    }
};
