<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    // リダイレクト先を指定
    protected $redirectTo = '/home';

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('auth')->only('logout');
    }

    protected function credentials(Request $request)
    {
        // 認証に使用するクレデンシャルを設定
        return [
            'email' => $request->email,  // email も必須な場合は含める
            'password' => $request->password,
        ];
    }

    protected function authenticated(Request $request, $user)
    {
        // 認証が成功したときのリダイレクトを設定
        return redirect()->intended('/home');
    }
}
