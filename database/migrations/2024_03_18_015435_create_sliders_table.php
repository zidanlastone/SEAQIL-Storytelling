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
        Schema::create('sliders', function (Blueprint $table) {
            $table->id()->primary();
            $table->string('title');
            $table->enum('type', ['image', 'video']); // tipe yang menentukan jenis slider dan aksi yang lakukan
            $table->text('description');  // merupakan deskripsi mengenai konteks slider tersebut
            $table->text('source');       // merupakan url sumber asset yang digunakan
            $table->enum('is_deleted', ['0', '1']); // mengindikasikan data di hapus
            $table->softDeletes(); // waktu penghapusan data
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sliders');
    }
};
