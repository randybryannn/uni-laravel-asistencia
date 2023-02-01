<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class loginController extends Controller
{
    //
    public function login(Request $request){

        $credentials = [
            "cod_usuario" => $request -> usuario,
            "password" => $request -> password,
        ];

        if(Auth::attempt($credentials)){
            $request-> session() -> regenerate();

            return redirect()->intended(route('home'));

        }else{
            return back()->withErrors([
                'message' => 'Usuario o contraseña incorrectos'
            ]);
        }
    }

    public function logout(Request $request){
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
