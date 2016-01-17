<?php $name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$formcontent="From: $name \n Message: $message";
$recipient = "colingrenvillewebsites@gmail.com";
$subject = "Website Inquiry";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>