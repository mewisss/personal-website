<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from ='web.michael.lewis3126@gmail.com';

$email_subject ='New Inquiry'
$email_body =   "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "Subject: $subject.\n".
                "User Message: $name.\n".;

$to ='michael.lewis3126@gmail.com';

$headers = :"From: $email_from \r\n";

$headers .= :"Reply-To: $visitor_email \r\n";

mail($to,$email_subject, $email_body,$headers)

header("LocationL: /html_pages/contact.html")

?>