<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$db_connection = mysqli_connect("localhost", "root", "", "gestor_gastos");

if (!$db_connection) {
    echo json_encode(["status" => "error", "message" => "Error al conectar"]);
} else {
    echo json_encode(["status" => "ok", "message" => "Conexión exitosa"]);
    
}
