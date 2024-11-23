<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Shift;
use Carbon\Carbon;

class SubmitController extends Controller
{
    public function create()
    {
        $userId=Auth::id();
        $currentMonth = Carbon::now()->format('Y-m');
        //"like", "$currentMonth%"は、2023-10%のようにワイルドカード%で終わらせることで、その月の任意の日に該当するレコードを抽出します。

        $hasSubmittedShifts = Shift::where('user_id', $userId)
                                    ->whereYear('date', Carbon::now()->year)
                                    ->whereMonth('date', Carbon::now()->month)
                                    ->exists();

        return inertia('Submit/Submit',['hasSubmittedShifts'=>$hasSubmittedShifts,]); // Inertiaを使用して登録ページを表示
    }

    public function store(Request $request)
    {
        // dd($request->all()); // 追加: 受信データを確認
        $dates = $request->date;
        $userId=Auth::id();
        $currentMonth = Carbon::now()->format('Y-m');//現在の年月
        
        Shift::where('user_id',$userId)
            ->where('date','like',"$currentMonth%")
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
