<?php

namespace App\Http\Controllers;

use App\Counter;
use App\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class CounterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Counter::select('id','user_id','count','created_at')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_id = $request->input('user_id');
        $count = $request->input('count');
        
        Counter::create([
            'user_id' => $user_id,
            'count' => $count,
        ]);

        return response()->json([
            'message'=>'Count inserted successfullly.',
            'success'=>true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Counter  $counter
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user=User::find($id);
        $counterId=Counter::where('user_id','=',$user->id)
        ->whereDate('created_at', Carbon::today())
        ->first();  

        return response()->json([
            'data'=>$counterId,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Counter  $counter
     * @return \Illuminate\Http\Response
     */
    public function edit(Counter $counter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Counter  $counter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $counter=Counter::find($id);
        $counter->user_id = $request->input('user_id');
        $counter->count = $request->input('count');
        $counter->update();

        return response()->json([
            'message'=>'Count updated successfullly.',
            'success'=>true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Counter  $counter
     * @return \Illuminate\Http\Response
     */
    public function destroy(Counter $counter)
    {
        //
    }
}
