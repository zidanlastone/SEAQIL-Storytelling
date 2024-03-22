<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->enum('gender', ['L', 'P']);
            $table->string('whatsapp_contact');             // untuk menyimpan kontak nomor wahatsapp peserta
            $table->string('parent_contact');
            $table->string('institution');
            $table->string('country');
            $table->string('province');
            $table->string('city');  
            $table->text('address');
            $table->string('pwd'); // untuk menyimpan password dalam plaintext
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
