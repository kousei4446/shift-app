<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shift;
use App\Models\CompShift;
use App\Models\AllowedEmail;
use App\Models\Prohibitdays;
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
    public function store(Request $request)
    {
        // comp_shifts テーブルのデータをすべて削除
        CompShift::truncate();
    
        // リクエストデータを取得
    
        // if (empty($datas) || !is_array($datas)) {
        //     return redirect()->route('master')->with('error', 'シフトデータが不正です。');
        // }
    
        // デバッグ用出力
        // \Log::info('Received data', ['datas' => $datas]); // ログに記録

        $datas = $request->input('date'); // 'data' の中の 'date' を取得
        // dd($request->all()); // 送信されたデータを表示

        // データを保存
        foreach ($datas as $date => $members) {
            foreach ($members as $member) {
                CompShift::create([
                    'user_id' => $member,
                    'date' => $date,
                ]);
            }
        }
    
        return redirect()->route('confirm')->with('success', 'シフトが正常に保存されました。');
    }
    
    
    public function store2(Request $request)
    {
        // `Prohibitdays` モデルのテーブルを削除
        Prohibitdays::truncate();
    
        // `datas` を取得
        $datas = $request->input('datas');
        // dd($datas);
    
        // データが存在するかを確認
        if (is_null($datas)) {
            return redirect()->route('master')->withErrors('データが送信されていません');
        }
    
        // `datas` のデータを保存
        foreach ($datas as $date) {
            // Carbonで日付を解析
            $date = Carbon::parse($date);
            Prohibitdays::create([
                'date' => $date->toDateString(),  // Y-m-d 形式で保存
            ]);
        }
    
        return redirect()->route('master');
    }
    public function store3(Request $request){
        $data = $request -> input('email');
        AllowedEmail::create(["email"=>$data]);
        return redirect()->route('master');
    } 
    public function del(Request $request)
    {
        // リクエストから削除する日付のリストを取得
        $datesToDelete = $request->input('dates', []);

        // 入力された日付に該当するシフトを削除
        if (!empty($datesToDelete)) {
            Shift::whereIn('date', $datesToDelete)->delete();
            return redirect('/master');
        }

        // 日付が指定されていない場合はエラーレスポンスを返す
        return response()->json(['success' => false, 'message' => '削除する日付が指定されていません']);
    }    
}
