<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\SubmitController;
use App\Http\Controllers\ConfirmController;
use App\Http\Controllers\MasterController;



// 認証機能のルート（Breezeが自動的に設定）
Route::get('/login', function () {
    return redirect()->route('login'); // ログインページにリダイレクト
});


Route::post('/logout', function () {
    Auth::logout();
    return redirect('/login'); // ログアウト後のリダイレクト先
})->name('logout');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])->name('login');


// 認証に必要なルート
Route::middleware('auth')->group(function () {
    Route::get('/home', function () {
        return inertia('Home/Home');;  // 認証後に表示されるダッシュボード
    })->name('home');

    // シフト提出のルート
    Route::get('/submit',[SubmitController::class,'create'])->name('submit');
    Route::post('/submit',[SubmitController::class,'store'])->name('submit.store');

    //シフト確認ルート
    Route::get('/confirm',[ConfirmController::class,'create'])->name('confirm');

    // プロフィール編集のルート
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //管理者画面のルート
    Route::get('/master',[MasterController::class,'create'])->name('master');
    Route::post('/master',[MasterController::class,'store'])->name('master.store');

});

require __DIR__.'/auth.php'; // Breezeの認証ルートをインクルード