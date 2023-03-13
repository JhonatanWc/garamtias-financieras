<?php
    if(!function_exists('change_characters_special')){
        function change_characters_special($info){
            $slug_url = preg_replace("/[^a-zA-Z0-9\_\-]+/", "", $info);
            $slug_url = str_replace(' ', '-', $info);
            $slug_url = str_replace('"', '', $slug_url);
            $slug_url = str_replace('í', 'i', $slug_url);
            $slug_url = str_replace(':', '', $slug_url);
            $slug_url = str_replace('.', '', $slug_url);
            $slug_url = str_replace(',', '', $slug_url);
            $slug_url = str_replace(';', '', $slug_url);
            $slug_url = str_replace('(', '', $slug_url);
            $slug_url = str_replace(')', '', $slug_url);
            $slug_url = str_replace('/', '-', $slug_url);
            $slug_url = str_replace('=', '-', $slug_url);
            $slug_url = str_replace('#', '-', $slug_url);
            $slug_url = str_replace('ñ', 'n', $slug_url);
            $slug_url = str_replace('=', '', $slug_url);
            //Reemplazamos la A y a
            $slug_url = str_replace(
            array('Á', 'À', 'Â', 'Ä', 'á', 'à', 'ä', 'â', 'ª'),
            array('A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a'),
            $slug_url
            );

            //Reemplazamos la E y e
            $slug_url = str_replace(
            array('É', 'È', 'Ê', 'Ë', 'é', 'è', 'ë', 'ê'),
            array('E', 'E', 'E', 'E', 'e', 'e', 'e', 'e'),
            $slug_url );

            //Reemplazamos la I y i
            $slug_url = str_replace(
            array('Í', 'Ì', 'Ï', 'Î', 'í', 'ì', 'ï', 'î', 'í'),
            array('I', 'I', 'I', 'I', 'i', 'i', 'i', 'i', 'i'),
            $slug_url );

            //Reemplazamos la O y o
            $slug_url = str_replace(
            array('Ó', 'Ò', 'Ö', 'Ô', 'ó', 'ò', 'ö', 'ô'),
            array('O', 'O', 'O', 'O', 'o', 'o', 'o', 'o'),
            $slug_url );

            //Reemplazamos la U y u
            $slug_url = str_replace(
            array('Ú', 'Ù', 'Û', 'Ü', 'ú', 'ù', 'ü', 'û'),
            array('U', 'U', 'U', 'U', 'u', 'u', 'u', 'u'),
            $slug_url );

            //Reemplazamos la N, n, C y c
            $slug_url = str_replace(
            array('Ñ', 'ñ', 'Ç', 'ç'),
            array('N', 'n', 'C', 'c'),
            $slug_url
            );
            
            return $slug_url;
        }
    }

    if(!function_exists('double_number_format')){
        function double_number_format($number)
        {
           $double_number = str_replace(',','',$number);
           return $double_number;
        }
    }

?>