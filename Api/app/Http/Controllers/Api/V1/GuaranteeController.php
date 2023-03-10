<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

use App\Models\files_upload;

use App\Jobs\GuaranteeRegisterJob;

class GuaranteeController extends Controller
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

    public function registerGuarantee(Request $request)
    {
        $file = $request->file('file');
        $management = $request->post('management');
        $login_id = $request->post('login_id');
        $url = public_path() . '//csvs/';
        
        if(!File::isDirectory($url)){
            File::makedirectory($url, 0777, true, true);
        }
        $originalFile = date('Y-m-d-H-i-s').'_'.Str::random(10);      
        $originalFile.='.csv';
    
        $file->move($url, $originalFile);
        
       
        $files_uploads = files_upload::create([
            'file' => 'public//csvs/' . $originalFile,
            'file_type' => $management,
            'login_id' => $login_id,
            'status' => 0
        ]);

        $registerJob = new GuaranteeRegisterJob();
        $this->dispatch($registerJob);

        return response([
            'message' => json_encode($files_uploads),  
            'status' => "200",
        ]);
    }
}
