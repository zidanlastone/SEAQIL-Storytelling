<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\I18n\Language;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('i18n_translation', function (Blueprint $table) {
            $table->id()->primary();
            $table->foreignId(Language::class)->constrained()->onDelete('CASCADE'); // Foreign key yang digunakan
            $table->string('label');            // label untuk konteks apa yang akan di terjemahkan
            $table->string('key');              // konstanta yang digunkana oleh sistem untuk mengambil data terjemahan
            $table->string('translation');      // nilai dari terjemahan mengenai konteks.
            $table->enum('is_deleted', ['0','1']); // mengindikasikan data di hapus
            $table->softDeletes(); // waktu penghapusan data
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('i18n_translation');
    }
};
