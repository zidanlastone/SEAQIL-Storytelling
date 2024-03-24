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
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('category_name'); // digunakan untuk kategori lomba yang di ikuti
            $table->string('image')->nullable(); // digunakan untuk kategori lomba yang di ikuti
            $table->text('description')->nullable(); // digunakan untuk kategori lomba yang di ikuti
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
        Schema::dropIfExists('categories');
    }
};
