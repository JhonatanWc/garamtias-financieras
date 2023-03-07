<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\people;
use App\Models\login;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function getProfile(Request $request)
    {
        $login_id = $request->post('id_login');
        $person_id = $request->post('id_person');

        $people = people::find($person_id);
        $login =  login::find($login_id);

        if(!is_null($people) && !is_null($login)){
            
        }
    }
}
