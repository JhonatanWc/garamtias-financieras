<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\files_uploads;


class FilesUpload implements ShouldQueue
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
        $files_system = files_uploads::where('status', '=', 0)
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
                case "Registros":
                    $fecha_desembolso_pos = array_search('fecha_desembolso', $headers);
                    $fecha_terminacion_pos = array_search('fecha_terminacion', $headers);

                    for ($i = 1; $i < count($records); $i++) {
                        $valores = explode(";", $records[$i]);

                        $validate = true;

                        $fecha_desembolso = date('Y-m-d', strtotime($valores[$fecha_desembolso_pos]));
                        $fecha_terminacion = date('Y-m-d',strtotime($valores[$fecha_terminacion_pos]));
                        if($fecha_desembolso > $fecha_terminacion){
                            $validate = false;
                        }


                    }
                    

                    // '*.score_de_credito' => ['nullable','numeric'],
                    // // '*.id_producto' => ['nullable','exists:products,code,parent_id,'.$parent_id->id.''],
                 
                break;
                case "Actualizacion":
                break;
                case "Recuperaciones":
                break;
                case "Reclamaciones":
                break;
                case "Pagos":
                break;
                case "Devoluciones":
                break;
                case "Estados":
                break;
                case "Facturas":
                break;
            }
        }

    }
}
