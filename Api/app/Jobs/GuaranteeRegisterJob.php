<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

use App\Models\files_upload;

class GuaranteeRegisterJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        sleep(2);
        $files_system = files_upload::where('status', '=', 0)
        ->orderby('id', 'asc')
        ->get();

        foreach($files_system as $key => $value){
            $id = $value['id'];
            $file_type = $value['file_type'];
            $user_id = $value['user_id'];
    
            $file_url = $value['file'];
            $file_url = substr($file_url,7);
            $records = file(public_path() .$file_url, FILE_IGNORE_NEW_LINES);
          
            $headers = explode(";", $records[0]);
            switch ($file_type){
                case "register":
                    $insert_meta = true; 
                //    $update_file = files_upload::find($id);
                //    $update_file->status = 1;
                //    $update_file->save();

                break;
            }
        }
    }
}
