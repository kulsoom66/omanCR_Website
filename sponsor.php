<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $position = $_POST["position"];
    $company = $_POST["company"];
    $field = $_POST["field"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $note = $_POST["note"];

    
    $to = "events@codeacademy.om"; // Replace with your email address
    $subject = "New sponsor form submission from $name";
    
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    mail($to, $subject, $note, $headers);
    
    // Redirect to a thank you page
    header("Location: index.html");
    exit;
}
?>
