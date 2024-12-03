<?php

namespace App\Http\Controllers;
use App\Models\NextShift;
use Illuminate\Http\Request;

class NextShiftController extends Controller
{
    //
    public function store(Request $request){
        dd($request->all());
    }
}
