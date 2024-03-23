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
        // membuat sebuah tabel untuk menentukan ketersediaan bahasa dalam sistem
        Schema::create('i18n_language', function (Blueprint $table) {
            $table->id()->primary();
            $table->string('code', 8);   // kode untuk bahasa terkait
            $table->string('name', 100); // nama bahasa terkait
            $table->enum('is_deleted', ['0', '1'])->default('0'); // mengindikasikan data di hapus
            $table->softDeletes(); // waktu penghapusan data
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //melakukan drop tabel terhadap schema language
        Schema::dropIfExists('i18n_language');
    }
};
