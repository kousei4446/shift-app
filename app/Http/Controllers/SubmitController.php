<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Shift;
use App\Models\Prohibitdays;
use Carbon\Carbon;

class SubmitController extends Controller
{
    public function create()
    {
        $userId = Auth::id();
        $email = Auth::user()->email;
        $currentMonth = Carbon::now()->format('Y-m');
        $nextMonth = Carbon::now()->addMonth()->format('Y-m'); // 来月の日付を取得
        
        // ユーザーが来月のシフトを既に提出したか確認
        $hasSubmittedShifts = Shift::where('user_id', $userId)
                                    ->whereYear('date', Carbon::now()->year)  // 現在の年を使用
                                    ->whereMonth('date', Carbon::now()->addMonth()->month)  // 来月の月を確認
                                    ->exists();
        
        // 禁止日を取得 (Prohibitdays モデルから取得)
        $prohibitdays = Prohibitdays::all(); // 禁止日のデータを取得する
        
        return inertia('Submit/Submit', [
            'hasSubmittedShifts' => $hasSubmittedShifts,
            'prohibitdays' => $prohibitdays,  // 禁止日をビューに渡す
            'email'=>$email,
        ]);
    }
    

    public function store(Request $request)
    {
        // dd($request->all()); // 追加: 受信データを確認
        $dates = $request->date;
        $userId=Auth::id();
        // dd(Auth::email());
        // dd(Auth::user());
        $currentMonth = Carbon::now()->format('Y-m');//現在の年月
        $nextMonth = Carbon::now()->addMonth()->format('Y-m'); // 来月の日付を取得
        
        Shift::where('user_id',$userId)
            ->where('date','like',"$nextMonth%")
            ->delete();

    
        foreach($dates as $date){
            Shift::create(['date'=>$date,'user_id'=>$userId]);
        }
        return redirect()->route('confirm'); // 完了後のリダイレクト
    }
    public function update(Request $request){
        $dates = $request -> date;
        if (is_array($dates) || is_object($dates)){
            foreach($dates as $date){
                Shift::create([
                    'date'=>$date,
                    'user_id'=>Auth::id(),
                ]);
            }
        }
    }

    public function __construct()
    {
        $this->middleware('auth');
    }

    // 他のメソッドがあればここに記述
}
