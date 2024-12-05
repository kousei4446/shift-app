<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shift;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\CompShift;


class MainsController extends Controller
{
    //
    public function index(){
        $userId = Auth::user()->name;
        // dd($username);
        // dd($userId);
        $compShift = CompShift::where('user_id',$userId)->get();
        // dd($compShift);

        // return inertia('Confirm/Confirm',['myShifts'=>$myShifts,'compShift'=>$compShift]);
        return inertia('Home/Home',['compShift'=>$compShift]);
    }
}
