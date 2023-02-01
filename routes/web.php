<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\loginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'login')->middleware('guest')->name('/');
Route::view('/home', 'home')->middleware('auth')->name('home');
Route::view('/practicante', 'asistencia.asistencia')->middleware('auth')->name('asistencia.asistencia');


Route::post('/iniciar-sesion', [LoginController::class,'login'])->name('iniciar-sesion');
Route::get('/logout', [LoginController::class,'logout'])->name('logout');