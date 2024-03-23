<?php

use App\Models\I18n\Language;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     * "language_code",
        "name",
        "route",
        "guard",
        "parent_menu"
     */
    public function up(): void
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Language::class);
            $table->string('name');
            $table->string('route');
            $table->string('guard');
            $table->string('icon')->nullable();
            $table->string('parent_menu')->nullable();
            $table->string('roles');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
