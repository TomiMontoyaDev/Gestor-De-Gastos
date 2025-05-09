<?php
require_once('../db_connection.php');

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email'], $data['contrasena'])) {
    echo json_encode(["status" => "error", "message" => "Faltan datos"]);
    exit;
}

$email = $data['email'];
$contrasena = password_hash($data['contrasena'], PASSWORD_DEFAULT); // escriptacion de detonacion masiva

// Verificar si el email ya está registrado
$checkStmt = $db_connection->prepare("SELECT id FROM usuarios WHERE email = ?");
$checkStmt->bind_param("s", $email);
$checkStmt->execute();
$checkStmt->store_result();

if ($checkStmt->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "El correo ya está registrado"]);
    $checkStmt->close();
    exit;
}
$checkStmt->close();

// Insertar el usuario si no existe
$stmt = $db_connection->prepare("INSERT INTO usuarios (email, contrasena) VALUES (?, ?)");
$stmt->bind_param("ss", $email, $contrasena);

if ($stmt->execute()) {
    echo json_encode(["status" => "ok", "message" => "Usuario creado con éxito mi papachooooooo"]);
} else {
    echo json_encode(["status" => "error", "message" => "No se pudo crear el usuario", "error" => $stmt->error]);
}

$stmt->close();
$db_connection->close();

