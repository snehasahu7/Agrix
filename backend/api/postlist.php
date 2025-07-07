<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$jsonFilePath = __DIR__ . '/../posts.json';

if (file_exists($jsonFilePath)) {
    $jsonData = file_get_contents($jsonFilePath);
    echo $jsonData;
} else {
    echo json_encode(["error" => "Posts not found."]);
}
?>
