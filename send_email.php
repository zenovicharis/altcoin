<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer();         // create a new object

        $mail->IsSMTP();                 // enable SMTP

        $mail->SMTPDebug = 0;            // debugging: 1 = errors and messages, 2 = messages only

        $mail->SMTPAuth = true;          // authentication enabled

        // $mail->SMTPSecure = 'ssl';       // secure transfer enabled REQUIRED for Gmail

        $mail->Host = 'tls://smtp.gmail.com:587';

        $mail->SMTPOptions = array(

           'ssl' => array(

             'verify_peer' => false,

             'verify_peer_name' => false,

             'allow_self_signed' => true

            )

        );

        $mail->Port = 465;               // or 587

        $mail->IsHTML(true);

        $mail->Username = "altcoinsender123@gmail.com";

        $mail->Password = "1011992$";

        //TODO: Set "From" from the sended email
        $mail->SetFrom($_POST['email']);

        //TODO: Replace subcject and body with the sent once - add name and email in the body text.
        $mail->Subject = "Contact email from Web Contact form";

        $mail->Body = "Hello Admin. <br/> You have new email from ".$_POST['name'].". <br/> This is the message: ".$_POST['message'];

        $mail->AddAddress("jovanovska_viki@hotmail.com");



        if(!$mail->Send()) {

            echo "Mailer Error: " . $mail->ErrorInfo;

        } else {

            echo "Message has been sent";

        }