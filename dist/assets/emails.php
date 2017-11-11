<?php
 
header('Content-type: application/json');
 
$errors = '';
 
if(empty($errors))
{
 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 	$to_emails = $request->mails;
 	$link = $request->link;
	$text = $request->message;

	$email_subject = "Обновление на сайте библиотеки инструментов.";

	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
	$headers .= "From: tlbaranovichy@tut.by\n";
	$headers .= "Reply-To: $from_emails";

	$message = "<p>".$text."</p>";
	if (isset($link) { $message .="<a href='".$link."' style='color:#005999'>Подробней...</a>" };
	
  
	mail($to_emails, $email_subject, $message, $headers );
	return $to_emails;
}