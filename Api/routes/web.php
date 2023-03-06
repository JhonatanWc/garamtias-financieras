<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\LoginController;

use Illuminate\Support\Facades\Auth;

Route::apiResource('v1/login', LoginController::class);
Route::post('v1/login', [LoginController::class,'requestLogin']);
Route::post('v1/forgot-password', [LoginController::class,'forgotPassword']);
Route::post('v1/recovery-password', [LoginController::class,'recoveryPassword']);
Route::post('v1/resend-token', [LoginController::class,'resendToken']);

// Route::group(['middleware' => ['auth']], function () {
    // Route::get('v1/myProfile', [LoginController::class,'AuthUser']);
    // Route::get('v1/logout', [LoginController::class,'logout']);
// });

Route::middleware('auth:sanctum')->group(function (){
    Route::get('v1/myProfile', [LoginController::class,'AuthUser']);
    Route::post('v1/logout', [LoginController::class,'logout']);
});