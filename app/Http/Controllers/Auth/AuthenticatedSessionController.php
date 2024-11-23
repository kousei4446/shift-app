<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    public function create()
    {
        return inertia('Auth/Login'); // Inertiaを使用してログインページを表示
    }
    public function store(Request $request)
{
    // バリデーション
    $request->validate([
        'email' => 'required|string|email', // ユニークチェックは不要
        'password' => 'required|string',            
    ]);

    // 認証
    if (Auth::attempt($request->only('email', 'password'))) {
        // ログイン成功時にダッシュボードにリダイレクト
        return redirect()->route('home');
    }

    // ログイン失敗時に再度ログインページにリダイレクト
    return redirect()->route('login')->withErrors([
        'email' => 'Invalid credentials.',
    ]);
}
    public function destroy(Request $request)
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
