<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\relation;
use App\Models\login;
use App\Models\people;

class TestController extends Controller
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

    public function test(Request $request)
    {
        $login_id = $request->post('login_id');

        $data = login::select('people.document')
        ->join('people', 'people.id', '=', 'login.person_id')
        ->join('relation', 'relation.person1', '=', 'people.id')
        ->where('login.id', '=', $login_id)
        ->get();

        return $data;
    }
}
