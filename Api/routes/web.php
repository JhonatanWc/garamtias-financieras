<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\LoginController;
use App\Http\Controllers\Api\V1\RoleController;
use App\Http\Controllers\Api\V1\MyAccountController;
use App\Http\Controllers\Api\V1\UserController;

use Illuminate\Support\Facades\Auth;

Route::apiResource('v1/login', LoginController::class);
Route::post('v1/login', [LoginController::class,'requestLogin']);
Route::post('v1/forgot-password', [LoginController::class,'forgotPassword']);
Route::post('v1/recovery-password', [LoginController::class,'recoveryPassword']);
Route::post('v1/resend-token', [LoginController::class,'resendToken']);
Route::post('v1/validate-token', [LoginController::class,'validateToken']);
Route::post('v1/logout', [LoginController::class,'logout']);

Route::middleware('auth:sanctum')->group(function (){
    Route::get('v1/myProfile', [LoginController::class,'AuthUser']);


    Route::apiResource('v1/roles', RoleController::class);
    Route::post('v1/get-role', [RoleController::class,'getRole']);
    Route::put('v1/update-role', [RoleController::class,'updateRole']);
    Route::get('v1/list-role', [RoleController::class,'listRole']);
    Route::post('v1/create-role', [RoleController::class,'createRole']);

    Route::apiResource('v1/my-profile', MyAccountController::class);
    Route::post('v1/get-profile', [MyAccountController::class,'getMyProfile']);
    Route::put('v1/update-profile', [MyAccountController::class,'updateMyProfile']);
    

    Route::apiResource('v1/users', UserController::class);
    Route::get('v1/list-users', [UserController::class,'listUsers']);
    Route::post('v1/create-users', [UserController::class,'listUsers']);
    
});