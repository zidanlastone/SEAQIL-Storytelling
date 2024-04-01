<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
        Gate::before(function ($user, $ability) {
            return $user->hasRole('administrator') ? true : null;
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            return (new MailMessage)
                ->level('info')
                ->greeting(null)
                ->salutation('Kompetisi Mendongeng Multibahasa di Era Digital')
                ->subject('Kompetisi Mendongeng Multibahasa di Era Digital')
                ->line('Terima kasih sudah melakukan pendaftaran Kompetisi Mendongeng Multibahasa di Era Digital.')
                ->line('Saat ini bukti pembayaran yang Anda unggah sedang diverifikasi oleh panitia.')
                ->line('Username/Email: ' . $notifiable->email)
                ->lineIf($notifiable->profile != null, 'Kata Sandi: ' . $notifiable?->profile->pwd)
                ->line('Silahkan Klik Tombol berikut untuk melakukan verifikasi Email')
                ->action('Verifikasi Alamat Surel', $url)
                ->line('Silakan bergabung juga ke grup Whatsapp [https://bit.ly/PesertaKompetisiMendongeng2024](https://bit.ly/PesertaKompetisiMendongeng2024) dan telegram  [https://bit.ly/PesertaKompetisiMendongeng2024_Tele](https://bit.ly/PesertaKompetisiMendongeng2024_Tele) untuk mendapatkan update informasi terbaru.')
                ->line('Terima kasih');
        });
    }
}
