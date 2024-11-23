<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shift;
use App\Models\CompShift;
use Carbon\Carbon;
class MasterController extends Controller
{
    public function create()
    {
        // リレーション名をuserに修正
        $shifts = Shift::with('user')->get(); // 'users' を 'user' に修正

            // 現在の日付を取得
        $currentDate = Carbon::now();
        $datas = CompShift::all();
        
        // 次の月の開始日と終了日を計算
        $nextMonthStart = $currentDate->copy()->addMonth()->startOfMonth();
        $nextMonthEnd = $currentDate->copy()->addMonth()->endOfMonth();

        // 次の月のシフトを取得
        $nextMonthShifts = CompShift::whereBetween('date', [$nextMonthStart, $nextMonthEnd])->get();
            // シフトの有無を確認
        if ($nextMonthShifts->isEmpty()) {
            // シフトが存在しない場合の処理
            $count=0;
        } else {
            // シフトが存在する場合の処理
            $count=1;
        }

        return inertia('Master/Master', ['shifts' => $shifts,'count'=>$count,'datas'=>$datas]);
    }
    public function store(Request $request){
        // comp_shifts テーブル内の全データを削除
        CompShift::truncate(); // または CompShift::query()->delete(); を使うこともできます
        
        $datas = $request->input('datas'); // datasを取得
        // dd($datas);

        foreach ($datas as $date => $members) {
            foreach ($members as $member) {
                CompShift::create([
                    'user_id' => $member,
                    'date' => $date,
                ]);
            }
        }
        return redirect()->route('master'); // 完了後のリダイレクト


    }
}
