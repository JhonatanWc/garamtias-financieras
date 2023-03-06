<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;

use App\Models\people;
use App\Models\login;

use App\Mail\loginTokenMail;
use App\Mail\forgotPasswordEmailMail;


use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
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
        $user_email = $request->post("user_email");
        $user_password = md5($request->post('user_password'));

        $validate = false;

        if($user_email != "" && $user_password != "") $validate = true;

        if($validate){
            $people = people::where('email', '=', $user_email)->get();

            if(isset($people[0])){
                $login = login::where('person_id', '=', $people[0]->id)
                ->where('password', '=', $user_password)
                ->get();
                if(!isset($login[0])){
                    return response([
                        'message' => 'invalid credentials',  
                        'status' => "203",
                    ]);
                }else{

                    $login_data = login::find($login[0]->id);
                    if($login_data->active == 1){
                        
                        $characters = '0123456789';
                        $charactersLength = strlen($characters);
                        $token = '';

                        for ($i = 0; $i < 6; $i++) {
                            $token .= $characters[rand(0, $charactersLength - 1)];
                        }

                        $details = [
                            'token' => $token,
                        ];
                    
                        $login_data = login::find($login[0]->id);
                        $login_data->token = $token;
                        $login_data->ip = $_SERVER['REMOTE_ADDR'];;
                        $login_data->last_login = date('Y-m-d');
                        $login_data->save();

                        Mail::to($user_email)->send(new loginTokenMail($details));
                    
                        // $user =  Auth::loginUsingId($login[0]->id);
                        // $from_token = $user->createToken('token')->plainTextToken;
                        // $cookie = cookie('jwt',$from_token,60*24);
                        // return response([
                        //     'message' => 'success',
                        //     'status' => "200",
                        //     'token' => $from_token
                        // ], status:Response::HTTP_ACCEPTED)->withCookie($cookie);
                    }else{
                        return response([
                            'message' => 'block user',  
                            'status' => "403",
                        ]);   
                    }                    
                }   
            }else{
                return response([
                    'message' => 'invalid credentials',  
                    'status' => "203",
                ]);
            }

        }else{
            return response([
                'message' => 'Any fields are empty',  
                'status' => "204",
            ]);
        }
         
   
    }

    public function forgotPassword(Request $request)
    {
        $user_email = $request->post("user_email");
        $validate = false;

        if($user_email != "") $validate = true;
        if($validate){
            $people = people::where('email', '=', $user_email)->get();

            if(isset($people[0])){
                $login = login::where('person_id', '=', $people[0]->id)
                ->get();

                if(isset($login[0])){
                    $token_recovery = Str::random(50);
                    $login_data = login::find($login[0]->id);
                    $login_data->password_recovery = $token_recovery;
                    $login_data->save();

                    $details = [
                        'correo' => $user_email,
                        'token' => $token_recovery,
                    ];

                    Mail::to($user_email)->send(new forgotPasswordEmailMail($details));
                    return response([
                        'message' => 'Email Send',  
                        'status' => "200",
                    ]);
                }
            }else{
                return response([
                    'message' => 'invalid credentials',  
                    'status' => "203",
                ]);
            }
            

        }else{
            return response([
                'message' => 'No fields',  
                'status' => "204",
            ]);
        }
    }

    public function recoveryPassword(Request $request)
    {
        $user_email = $request->post("user_email");
        $user_password = $request->post("user_password");
        $user_token = $request->post("user_token");

        $validate = false;
        if($user_email != "" &&  $user_password != "" && $user_token != "")$validate = true;
        if($validate){
            $people = people::where('email', '=', $user_email)->get();

            if(isset($people[0])){
                $login = login::where('person_id', '=', $people[0]->id)
                ->where('password_recovery', '=', $user_token)
                ->get();

                if(isset($login[0])){
                    $login_data = login::find($login[0]->id);
                    $login_data->password_recovery = null;
                    $login_data->password = md5($user_password);
                    $login_data->save();

                    return response([
                        'message' => 'Password change',  
                        'status' => "200",
                    ]);
                }else{
                    return response([
                        'message' => 'invalid credentials',  
                        'status' => "203",
                    ]);
                }
            }else{
                return response([
                    'message' => 'invalid credentials',  
                    'status' => "203",
                ]);
            }
        }else{
            return response([
                'message' => 'Any fields are empty',  
                'status' => "204",
            ]);
        }
    }

    public function resendToken(Request $request)
    {
        # code...
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
