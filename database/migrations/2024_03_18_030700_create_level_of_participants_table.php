<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('level_of_participants', function (Blueprint $table) {
            $table->id();
            $table->string('level_name');           // untuk menyimpan nama jenjang kelas yang nanti akan di ikuti oleh peserta
            $table->text('description')->nullable();// untuk menyimpan nama jenjang kelas yang nanti akan di ikuti oleh peserta
            $table->enum('is_deleted', ['0', '1']); // mengindikasikan data di hapus
            $table->softDeletes();                  // waktu penghapusan data
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('level_of_participants');
    }
};
