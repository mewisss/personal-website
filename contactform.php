<?php

if(isset($_POST['submit'])){
    $name =$_POST['name'];
    $subject =$_POST['subject'];
    $mailFrom =$_POST['email'];
    $message =$_POST['message'];

    $mailTo = "michael.lewis3126@gmail.com";
    $headers ="FROM: ".$mailFrom;
    $txt = "New Form Submission from " .$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.html")
}

