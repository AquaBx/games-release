<?php
//header('Content-Type: application/json');
//error_reporting(0);
header("Access-Control-Allow-Origin: *");

date_default_timezone_set('Europe/Paris');
$data = json_decode(file_get_contents("php://input"));
echo file_get_contents("php://input");
$file = json_decode(file_get_contents("games.json"));

foreach ($data as $key => $value){
    if (!isset($file->$key)){
        $file -> {$key} = array();
        echo "yes";
    }
    foreach ($value as $key2 => $value2){
        if ($key2 === "rm" and $value2 === true){
            unset($file -> $key);
            break;
        }
        $file -> {$key}[$key2] = $value2;
    }
}

$fp = fopen('games.json', 'w');
fwrite($fp, json_encode($file));
fclose($fp);
?><?php
//header('Content-Type: application/json');
//error_reporting(0);
header("Access-Control-Allow-Origin: *");

date_default_timezone_set('Europe/Paris');
$data = json_decode(file_get_contents("php://input"));
echo file_get_contents("php://input");
$file = json_decode(file_get_contents("games.json"));

foreach ($data as $key => $value){
    if (!isset($file->$key)){
        $file -> {$key} = array();
        echo "yes";
    }
    foreach ($value as $key2 => $value2){
        if ($key2 === "rm" and $value2 === true){
            unset($file -> $key);
            break;
        }
        $file -> {$key}[$key2] = $value2;
    }
}

$fp = fopen('games.json', 'w');
fwrite($fp, json_encode($file));
fclose($fp);
?><?php
//header('Content-Type: application/json');
//error_reporting(0);
header("Access-Control-Allow-Origin: *");

date_default_timezone_set('Europe/Paris');
$data = json_decode(file_get_contents("php://input"));
echo file_get_contents("php://input");
$file = json_decode(file_get_contents("games.json"));

foreach ($data as $key => $value){
    if (!isset($file->$key)){
        $file -> {$key} = array();
        echo "yes";
    }
    foreach ($value as $key2 => $value2){
        if ($key2 === "rm" and $value2 === true){
            unset($file -> $key);
            break;
        }
        $file -> {$key}[$key2] = $value2;
    }
}

$fp = fopen('games.json', 'w');
fwrite($fp, json_encode($file));
fclose($fp);
?>