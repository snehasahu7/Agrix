<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


$data = json_decode(file_get_contents("php://input"), true);


$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$subject = $data['subject'] ?? '';
$message = $data['message'] ?? '';

$to = "operations@agrixagro.com";


$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$body = "
    <strong>From:</strong> $name &lt;$email&gt;<br><br>
    <strong>Message:</strong><br>" . nl2br($message);

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["message" => "Message sent successfully."]);
} else {
    echo json_encode(["message" => "Failed to send message."]);
}
?>
