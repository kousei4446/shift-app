<?php
// app/Providers/AppServiceProvider.php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\AllowedEmail;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Inertia::share([
            // 認証情報を共有
            'auth' => fn () => [
                'user' => Auth::user() ? [
                    'id' => Auth::user()->id,
                    'name' => Auth::user()->name,
                ] : null,
            ],

            // AllowedEmail のデータを共有
            'allowedEmail' => fn () => Auth::check() ? AllowedEmail::where('email',Auth::user()->email)->get() : [],
        ]);
    }
// todos' => fn () => Auth::check() ? Todo::where('user_id', Auth::id())->get() : [],

    public function register()
    {
        //
    }
}
