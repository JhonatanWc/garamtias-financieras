<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

use App\Models\files_upload;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\RegisterGuaranteeImport;

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
            $file = $value['file'];
            // $contents = Storage::get($file);
            $contents = Storage::disk('public')->get($file);

            switch ($file_type){
                case "register":
                    Excel::import(new RegisterGuaranteeImport, $file, 'public');
                break;
            }
            $update_status = files_upload::find($id);
            $update_status->status = 1;
            $update_status->save();
        }
    }
}
