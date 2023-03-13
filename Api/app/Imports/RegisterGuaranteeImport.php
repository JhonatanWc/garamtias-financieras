<?php

namespace App\Imports;


use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;

use App\Models\guarantee;
use App\Models\register_guarantee;
use App\Models\people;


class RegisterGuaranteeImport implements ToModel, WithHeadingRow, WithValidation, WithBatchInserts, WithChunkReading
{
    use Importable;

    public function batchSize(): int
    {
        return 2500;
    }

    public function chunkSize(): int
    {
        return 2500;
    }


    public function model(array $row)
    {


        //informacion general de la garantia
        $document = (isset($row['documento_identidad'])) ? $row['documento_identidad'] : 'N/A';
        $pay_code = (isset($row['pagare'])) ? $row['pagare'] : 'N/A';
        $nit = "900575179";
        //

        //informacion del registro de la garantia
        $amount = (isset($row['monto'])) ? $row['monto'] : 0;
        $other = (isset($row['otros'])) ? $row['otros'] : 0;
        $distribution_city = (isset($row['ciudad_desembolso'])) ? $row['ciudad_desembolso'] : 'N/A';
        $id_product = (isset($row['id_producto'])) ? $row['id_producto'] : 'N/A';
        $office = (isset($row['sucursal'])) ? $row['sucursal'] : 'N/A';
        $sector = (isset($row['sector'])) ? $row['sector'] : 'N/A';
        $distribution_date = (isset($row['fecha_desembolso'])) ? date('Y-m-d', strtotime($row['fecha_desembolso'])) : date('Y-m-d');
        $end_date = (isset($row['fecha_terminacion'])) ? date('Y-m-d', strtotime($row['fecha_terminacion'])) : date('Y-m-d');
        $credit_type = (isset($row['tipo_credito'])) ? $row['tipo_credito'] : 'N/A';
        $previous_pay_code = (isset($row['pagare_anterior'])) ? $row['pagare_anterior'] : 'N/A';
        $before_tax = (isset($row['valor_de_fianza_antes_de_iva'])) ? $row['valor_de_fianza_antes_de_iva'] : 0;
        $load_date = (isset($row['fecha_proceso'])) ? date('Y-m-d', strtotime($row['fecha_proceso'])) : date('Y-m-d');
        //

        //informacion del solicitante de la garantia
        $names = (isset($row['nombres'])) ? $row['nombres'] : 'N/A';
        $last_names = (isset($row['apellidos'])) ? $row['apellidos'] : 'N/A';
        $credit_score = (isset($row['score_de_credito'])) ? $row['score_de_credito'] : 'N/A';
        $birthday_date = (isset($row['fecha_de_nacimiento'])) ? $row['fecha_de_nacimiento'] : date('Y-m-d');
        $gender = (isset($row['genero'])) ? $row['genero'] : 'N/A';
        $occupation = (isset($row['ocupacion'])) ? $row['ocupacion'] : 'N/A';
        $profile = (isset($row['perfil_cliente'])) ? $row['perfil_cliente'] : 'N/A';
        //


        $guarantee = guarantee::where('document', '=', $document)
            ->where('nit', '=', $nit)
            ->where('pay_code', '=', $pay_code)
            ->get();

        if (!isset($guarantee[0])) {
            $new_guarantee = guarantee::create([
                'document' => $document,
                'nit' => $nit,
                'pay_code' => $pay_code,
            ]);




            $exist_people = people::where('document', '=', $document)
                ->get();
            if (isset($exist_people[0])) {
                $people_update = people::find($exist_people[0]->id);
                $people_update->names = $names;
                $people_update->last_names = $last_names;
                $people_update->credit_score = $credit_score;
                $people_update->birthday_date = $birthday_date;
                $people_update->gender = $gender;
                $people_update->occupation = $occupation;
                $people_update->profile = $profile;
                $people_update->save();
            } else {
                $people = people::create([
                    'document' => $document,
                    'names' => $names,
                    'last_names' => $last_names,
                    'credit_score' => $credit_score,
                    'birthday_date' => $birthday_date,
                    'gender' => $gender,
                    'occupation' => $occupation,
                    'profile' => $profile,
                ]);
            }
            return new register_guarantee([
                'id_product' => 1,
                'id_guarantee' => $new_guarantee->id,
                'full_name' => $names . ' ' . $last_names,
                'amount' => double_number_format($amount),
                'previous_pay_code' => $previous_pay_code,
                'other' => double_number_format($other),
                'distribution_city' => $distribution_city,
                'office' => $office,
                'distribution_date' => $distribution_date,
                'end_date' => $end_date,
                'load_date' => $load_date,
                'credit_type' => $credit_type,
                'before_tax' => double_number_format($before_tax),
                'status' => 'VIGENTE',
            ]);
        }
    }

    public function rules(): array
    {
        return [
            
        ];
    }

    

}