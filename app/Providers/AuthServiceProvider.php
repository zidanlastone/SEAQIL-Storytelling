<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
        Gate::before(function($user, $ability){
            return  $user->hasRole('administrator') ? true : null; 
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            // $user = Auth::user()->user->with('profile');
            // dd($notifiable);
            return (new MailMessage)
            ->subject('Kompetisi Mendongeng Multibahasa di Era Digital')
                // ->greeting('Hallo!')
                ->line('Terima kasih sudah melakukan pendaftaran Kompetisi Mendongeng Multibahasa di Era Digital.')
                ->line('Saat ini bukti pembayaran yang Anda unggah sedang diverifikasi oleh panitia.')
                ->line('Email:'. $notifiable->email)
                ->line('Kata Sandi    :'. $notifiable->profile->pwd)
                ->line('Silahkan Klik Tombol berikut untuk melakukan verifikasi Email')
                ->action('Verifikasi Alamat Surel', $url)
                ->line('Silakan bergabung juga ke grup Whatsapp http://xxxx dan telegram http://xxx untuk mendapatkan update informasi terbaru.')
                ->line('Terima kasih');
        });
    }
}
