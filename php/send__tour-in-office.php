<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$date = $_POST['message'];
$message = $_POST['message'];

$to = 'miratur.spb@mail.ru';
$subject = 'Подбор и покупка тура в офисе!';
$body = "Имя: $name\nТелефон: $phone\nКогда планируете подойти?: $date\nКомментарий: $message";
$headers = "From: miratur.ru";

$mailSent = mail($to, $subject, $body, $headers);
