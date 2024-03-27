<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\ExternalServiceConfig;
use App\Models\Participant\LevelOfParticipant;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@email.com',
            'password' => Hash::make('password')
        ]);

        User::factory()->create([
            'name' => 'Operator',
            'email' => 'operator@email.com',
            'password' => Hash::make('password')
        ]);

        ExternalServiceConfig::create([
            'service_name' => 'email-configuration',
            'protocol' => 'smtp',
            'host' => 'mailpit',
            'port' => '1025',
            'timeout' => '3000',
            'username' => '',
            'password' => '',
        ]);

        Category::insert([
            [
                'category_name' => 'Sekolah Dasar',
                'image' => '/image/category/SD.jpg',
                'description' => 'Kompetisi mendongeng jenjang SD dan sederajat adalah ajang yang memperlihatkan bakat bercerita anak-anak dalam sebuah lomba yang menarik dan inspiratif. Para peserta, yang merupakan siswa-siswi dari berbagai sekolah dasar dan institusi pendidikan sederajat, menyajikan cerita-cerita menarik dengan penuh semangat dan ekspresi. Mereka memperlihatkan keahlian dalam mengolah kata-kata, intonasi, serta gerakan tubuh yang sesuai dengan alur cerita yang mereka bawakan, menarik perhatian penonton dan juri.

                Dalam kompetisi ini, peserta tidak hanya menunjukkan kemampuan bercerita mereka, tetapi juga memperoleh pengalaman berharga dalam berbicara di depan umum dan membangun kepercayaan diri. Mereka belajar untuk menyampaikan cerita dengan jelas dan memikat, menggunakan kreativitas dan imajinasi mereka untuk menarik perhatian audiens. Kompetisi mendongeng menjadi ajang yang menginspirasi anak-anak untuk mengembangkan bakat bercerita mereka, serta mempromosikan pentingnya literasi dan kesenian dalam pembelajaran di tingkat SD dan sederajat.
                ',
            ],
            [
                'category_name' => 'Sekolah Menengah Pertama',
                'image' => '/image/category/SMP.jpg',
                'description' => 'Kompetisi mendongeng jenjang SMP dan sederajat adalah platform yang memungkinkan para remaja untuk mengekspresikan kreativitas dan bakat bercerita mereka. Para peserta, yang terdiri dari siswa-siswi dari berbagai sekolah menengah pertama dan lembaga pendidikan sejenis, memiliki kesempatan untuk membagikan cerita-cerita unik mereka dengan gaya dan bahasa yang menarik. Dalam ajang ini, mereka berkompetisi untuk menunjukkan kemampuan storytelling mereka dengan penuh semangat dan keberanian di depan audiens dan juri.

                Selain menjadi wadah untuk menampilkan bakat bercerita, kompetisi ini juga menjadi sarana bagi para peserta untuk mengasah keterampilan berbicara di depan umum, memperluas wawasan literasi, dan meningkatkan kepercayaan diri. Mereka belajar untuk mengelola suasana, memainkan peran, dan menangkap perhatian audiens dengan cara yang kreatif dan menarik. Melalui kompetisi mendongeng ini, para siswa-siswi di jenjang SMP dan sederajat dapat mengeksplorasi dunia storytelling dengan lebih dalam, merasakan kepuasan atas pencapaian mereka, dan memperoleh pengalaman berharga dalam berkomunikasi secara efektif.
                ',
            ],
            [
                'category_name' => 'Sekolah Menengah Atas',
                'image' => '/image/category/SMA.jpg',
                'description' => 'Kompetisi mendongeng jenjang SMA dan sederajat adalah acara yang memberikan kesempatan kepada para remaja untuk menunjukkan keterampilan bercerita mereka dengan gaya yang khas dan penuh warna. Peserta kompetisi ini, yang terdiri dari siswa-siswi dari berbagai sekolah menengah atas dan lembaga pendidikan serupa, diberikan kesempatan untuk membagikan cerita-cerita inspiratif mereka dengan pendekatan yang kreatif dan memikat. Di panggung kompetisi, mereka dapat mengekspresikan ide-ide dan emosi mereka melalui cerita-cerita yang mereka pilih dan hadirkan secara penuh semangat.

                Selain menjadi ajang untuk menampilkan bakat bercerita, kompetisi mendongeng di jenjang SMA dan sederajat juga merupakan peluang bagi peserta untuk mengembangkan keterampilan berbicara di depan publik dan meningkatkan kepercayaan diri mereka. Mereka belajar untuk mengatur alur cerita, menghadirkan karakter dengan autentisitas, dan menciptakan suasana yang memikat untuk audiens. Melalui partisipasi dalam kompetisi ini, para siswa-siswi dapat merasakan pengalaman berharga dalam mengungkapkan diri mereka secara artistik, menginspirasi orang lain, dan memperluas wawasan literasi mereka.
                ',
            ],
            [
                'category_name' => 'Mahasiswa',
                'image' => '/image/category/Mahasiswa.jpg',
                'description' => 'Kompetisi mendongeng kategori mahasiswa adalah sebuah ajang yang memungkinkan para mahasiswa dari berbagai perguruan tinggi untuk menunjukkan keahlian dan kreativitas mereka dalam bercerita. Peserta dalam kompetisi ini memiliki kesempatan untuk mengeksplorasi beragam cerita dan gaya penceritaan yang mereka kuasai, serta menampilkan bakat bercerita mereka di depan sejumlah penonton. Dalam kompetisi ini, mahasiswa diberi kebebasan untuk memilih topik cerita, memanfaatkan imajinasi mereka, dan menyajikannya dengan gaya yang unik dan menarik.

                Selain menjadi platform untuk mengekspresikan bakat bercerita, kompetisi mendongeng kategori mahasiswa juga dapat menjadi wahana untuk meningkatkan kemampuan berkomunikasi dan kepemimpinan. Peserta belajar untuk mengatur alur cerita secara efektif, mengembangkan karakter, serta membangun suasana yang memikat untuk penonton. Melalui proses persiapan dan penampilan di kompetisi, mahasiswa memiliki kesempatan untuk meningkatkan kemampuan mereka dalam berbicara di depan umum, mengasah keterampilan presentasi, dan memperluas wawasan literasi mereka.
                ',
            ],
            [
                'category_name' => 'Guru',
                'image' => '/image/category/Guru.jpg',
                'description' => 'Kompetisi mendongeng kategori guru adalah sebuah ajang yang memungkinkan para pendidik untuk menunjukkan kemampuan mereka dalam bercerita dan menginspirasi siswa serta rekan kerja mereka. Para peserta dalam kompetisi ini memiliki kesempatan untuk menghadirkan berbagai cerita yang mendidik, menghibur, dan menginspirasi, serta menggunakan keterampilan bercerita mereka untuk memberikan pesan-pesan moral yang bernilai. Melalui partisipasi dalam kompetisi ini, para guru dapat memperluas kreativitas mereka dalam merancang narasi yang menarik dan menyesuaikannya dengan berbagai kebutuhan pendidikan.

                Selain itu, kompetisi mendongeng kategori guru juga menjadi kesempatan bagi para pendidik untuk memperdalam pemahaman mereka tentang kekuatan narasi dan pengaruhnya terhadap pembelajaran. Dengan mengeksplorasi teknik-teknik penceritaan yang efektif, para peserta dapat memperkaya metode pengajaran mereka, menciptakan lingkungan belajar yang lebih menarik dan interaktif, serta meningkatkan koneksi emosional antara guru dan siswa. Melalui kompetisi ini, guru dapat mengembangkan kemampuan mereka dalam menyampaikan pelajaran dengan cara yang berkesan dan membangun hubungan yang lebih erat dengan siswa, sehingga menciptakan pengalaman belajar yang lebih berharga dan bermakna.
                ',
            ],
            [
                'category_name' => 'Umum',
                'image' => '/image/category/Umum.jpg',
                'description' => 'Kompetisi mendongeng kategori umum adalah sebuah ajang yang membuka kesempatan bagi siapa pun, dari berbagai latar belakang dan profesi, untuk menunjukkan keahlian mereka dalam seni bercerita. Peserta dari segala usia, mulai dari anak-anak hingga orang dewasa, dapat bergabung dalam kompetisi ini untuk berbagi cerita dan memukau para penonton dengan imajinasi dan kreativitas mereka. Di dalam kompetisi ini, setiap peserta memiliki kesempatan untuk memilih cerita yang ingin mereka sampaikan, baik itu cerita rakyat, legenda, fiksi, atau pengalaman pribadi, dan menyajikannya dengan gaya yang unik dan memikat.

                Selain menjadi platform untuk menghibur dan menginspirasi orang lain, kompetisi mendongeng kategori umum juga merupakan kesempatan bagi peserta untuk meningkatkan keterampilan berbicara di depan umum, memperluas cakrawala pengetahuan mereka, dan memperkaya keterampilan bercerita mereka. Peserta belajar untuk mengatur alur cerita dengan baik, mengembangkan karakter yang kuat, serta membangun suasana yang menarik untuk mendapatkan perhatian audiens. Kompetisi semacam ini juga mendorong kolaborasi dan pertukaran ide antar peserta, menciptakan lingkungan yang mendukung pertumbuhan dan pembelajaran bersama.
                ',
            ],
        ]);

        LevelOfParticipant::insert([
            [
                'level_name' => 'SD/Sederajat Kelas 1',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah dasar kelas 1',
                'is_deleted' => '0'
            ],
            [
                'level_name' => 'SD/Sederajat Kelas 2',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah dasar kelas 2',
                'is_deleted' => '0'
            ],
            [
                'level_name' => 'SD/Sederajat Kelas 3',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah dasar kelas 3',
                'is_deleted' => '0'
            ],
            [
                'level_name' => 'SD/Sederajat Kelas 4',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah dasar kelas 4',
                'is_deleted' => '0'
            ],
            [
                'level_name' => 'SD/Sederajat Kelas 5',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah dasar kelas 5',
                'is_deleted' => '0'
            ],
            [
                'level_name' => 'SD/Sederajat Kelas 6',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah dasar kelas 6',
                'is_deleted' => '0'
            ],
            // SMP/Sederajat
            [
                'level_name' => 'SMP/Sederajat Kelas 7',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah menegah pertama kelas 7',
                'is_deleted' => '0'
            ],
            [
                'level_name' => 'SMP/Sederajat Kelas 8',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah menegah pertama kelas 8',
                'is_deleted' => '0'
            ],
            [
                'level_name' => 'SMP/Sederajat Kelas 9',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah menegah pertama kelas 9',
                'is_deleted' => '0'
            ],
            // SMA Sederajat
            [
                'level_name' => 'SMA/Sederajat Kelas 10',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah menegah atas kelas 10',
                'is_deleted' => '0'
            ],
            [
                'level_name' => 'SMA/Sederajat Kelas 11',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah menegah atas kelas 11',
                'is_deleted' => '0'
            ],
            [
                'level_name' => 'SMA/Sederajat Kelas 12',
                'description' => 'Tingkatan yang dikhususkan untuk sekolah menegah atas kelas 12',
                'is_deleted' => '0'
            ],
        ]);

        $this->call([
            PermissionSeeder::class,
            MenuSeeder::class,
        ]);

        $admin = User::where(['email' => 'admin@email.com'])->firstOrFail();
        $admin->assignRole('administrator');

        $operator = User::where(['email' => 'operator@email.com'])->firstOrFail();
        $operator->assignRole('operator');
    }
}
