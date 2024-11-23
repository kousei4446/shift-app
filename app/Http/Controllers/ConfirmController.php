<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shift;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\CompShift;


class ConfirmController extends Controller
{
    //
    public function create(){
        $userId=Auth::id();
        $currentMonth=Carbon::now()->format('Y-m');
        $compShift = CompShift::all();
        $myShifts=Shift::where('user_id',$userId)
                        ->where('date','like',"$currentMonth%")
                        ->get();
        return inertia('Confirm/Confirm',['myShifts'=>$myShifts,'compShift'=>$compShift]);
    }
}
