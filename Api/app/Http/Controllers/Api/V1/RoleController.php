<?php

namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\role;

class RoleController extends Controller
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

    public function getRole(Request $request)
    {
        $role_data = role::find($request->role_id);

        return response([
            'status' => "200",
            'permissions' => $role_data->permissions,
        ]);
        
    }

    public function listRole(Request $request)
    {
        $roles = role::orderby('id', 'asc')->get();
        return response([
            'status' => "200",
            'permissions' => $roles,
        ]);

        

    }

    public function createRole(Request $request)
    {
        $permissions = $request->post('permissions');
        $role_name = $request->post('role_name');

        $new_role = role::create([
            'role_name' => $role_name,
            'permissions' => json_encode($permissions),
        ]);

        return response([
            'status' => "200",
            'message' => $new_role,
        ]);
    }

    public function updateRole(Request $request)
    {

        $role_data = role::find($request->input('role_id'));
        $role_name = $request->input('role_name');
        $permissions = $request->input('permissions');

        $role_data->role_name = $role_name;
        $role_data->permissions = $permissions;
        $role_data->save();

        return response([
            'status' => "200",
            'permissions' => $permissions,
        ]);
    }
}
