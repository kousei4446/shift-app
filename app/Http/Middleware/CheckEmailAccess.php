<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\AllowedEmail;

class CheckEmailAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // ユーザーがログインしており、許可リストに存在する場合のみ通過
        if ($request->user() && AllowedEmail::where('email', $request->user()->email)->exists()) {
            return $next($request);
        }

        // アクセス拒否
        return redirect('/home')->with('error', 'アクセスできません');
    }
}
