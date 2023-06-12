<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = 'miratur.spb@mail.ru';
$subject = 'Заказ горящего тура!';
$body = "Имя: $name\nТелефон: $phone\nКомментарий: $message";
$headers = "From: miratur.ru";

$mailSent = mail($to, $subject, $body, $headers);
