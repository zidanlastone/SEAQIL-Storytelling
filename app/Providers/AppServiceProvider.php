<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

use DB;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        
        if(Schema::hasTable("external_service_configs")){
            $email_config = DB::table('external_service_configs')->where(['service_name' => 'email-service'])->first();
            if($email_config){
                config(['mail.default' => $email_config->protocol]);
                config(['mail.mailers.smtp.host' => $email_config->host]);
                config(['mail.mailers.smtp.port' => $email_config->port]);
                // using email encryption type fromenvironment validation
                // config(['mail.mailers.smtp.encryption' => $email_config->tls]);
                config(['mail.mailers.smtp.username' => $email_config->username]);
                config(['mail.mailers.smtp.password' => $email_config->password]);
                config(['mail.mailers.form.address' => $email_config->username]);
                config(['mail.mailers.form.name' => 'si-mase']);
            }
        }
    }
}
