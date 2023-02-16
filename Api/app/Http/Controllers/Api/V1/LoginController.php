<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;

use App\Models\login;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function requestLogin(Request $request)
    {

        $user_login = $request->user_login;
        $user_password = $request->user_password;

        $login_susses = login::where('user_login', '=', $user_login)
        ->where('user_password', '=', md5($user_password))
        ->get();

        if(!isset($login_susses[0])){
            return response([
                'message' => 'invalid credentials',  
            ], status:Response::HTTP_UNAUTHORIZED);
        }else{
            $user =   Auth::loginUsingId($login_susses[0]->id);

            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('jwt',$token,60*24); // 1 day

            return response([
                'message' => 'success',
                'status' => "200",
                'token' => $token
            ], status:Response::HTTP_ACCEPTED)->withCookie($cookie);
        }     
   
    }

    public function AuthUser()
    {
        return Auth::user();
    }

    public function logout()
    {
      
        session()->flush();
        $cookie = Cookie::forget('jwt');
        return response([
            'message' => 'success'
        ])->withCookie($cookie);
    }
}
