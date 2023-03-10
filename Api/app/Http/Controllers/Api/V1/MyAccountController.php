<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\people;
use App\Models\login;
use App\Models\role;
use App\Models\relation;

class MyAccountController extends Controller
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


    public function getMyProfile(Request $request)
    {
        $person_id = $request->post('person_id');
        $login_id = $request->post('login_id');
        
        $validate = false;

        if($person_id != "" && $login_id != "") $validate = true;
        if($validate){
            $people = people::find($person_id);
            $login =  login::find($login_id);
            $role = role::find($login->rol_id);
    
            $rol_permissions = (is_array(json_decode($role->permissions,true)))? json_decode($role->permissions,true): array();
            $additional_permissions = (is_array(json_decode($login->additional_permissions,true)))? json_decode($login->additional_permissions,true): array();
    
            $permissions = array_merge($rol_permissions,  $additional_permissions);

            $relation = relation::where('person1', '=', $person_id)
            ->get();
    
            return response([
                'profile_data' => $people,  
                'account_data' => $login,  
                'permissions' => $permissions,  
                'relations' => $relation,  
                'status' => "200",
            ]);
        }else{
            return response([
                'message' => 'Any of required fields are empty',  
                'status' => "204",
            ]); 
        }


        
    }

    public function updateMyProfile(Request $request)
    {
        $person_id = $request->post('person_id');
        $type_relation = $request->post('type_relation');
        $relation_id = $request->post('relation_id');
        $login_id = $request->post('login_id');
        $document = $request->input('document');
        $names = $request->input('names');
        $last_names = $request->input('last_names');
        $email = $request->input('email');
        $city = $request->input('city');
        $password = $request->input('password');

        $validate = false;

        if($document != "" && $names != "" && $email != "" && $city != "" && $person_id != "" && $login_id != "") $validate = true;

        if($validate){
            $person = people::find($person_id);

            if($person->document != $document){
                $search_person = people::where('document', '=', $document)
                ->get();

                if(!isset($search_person[0])){
                    $person->document = $document;
                }else{
                    return response([
                        'message' => 'this document already exist in the system',  
                        'status' => "409",
                    ]); 
                } 
            }
            if($person->email != $email){
                $search_person = people::where('email', '=', $email)
                ->get();

                if(!isset($search_person[0])){
                    $person->email = $email;
                }else{
                    return response([
                        'message' => 'this email already exist in the system',  
                        'status' => "409",
                    ]); 
                } 
            }

            $person->names = $names;
            $person->last_names = $last_names;
            $person->city = $city;
            $person->save();

            $login_data = login::find($login_id);
            if($password != ""){
                $login_data->password = md5($password);
                $login_data->save();
            }

            if($type_relation != "" && $relation_id != ""){
                $relation = relation::where('person1', '=', $person_id)
                ->get();

                if(isset($relation[0])){
                    $update_relation = relation::find($relation[0]->id);
                    $update_relation->type_relation = $type_relation;
                    $update_relation->person2 = $relation_id;
                    $update_relation->save();
                }else{
                    $new_relation = relation::create([
                        'person1' => $person_id,
                        'type_relation' => $type_relation,
                        'person2' => $relation_id,
                    ]);
                }
            }

            return response([
                'message' => 'user update',  
                'status' => "200",
            ]);

        }else{
            return response([
                'message' => 'Any of required fields are empty',  
                'status' => "204",
            ]);
        }
    }
}
