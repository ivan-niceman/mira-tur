<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$time = $_POST['time'];
$message = $_POST['message'];

$to = 'miratur.spb@mail.ru';
$subject = $_POST['subject'] ?: 'Подбор и покупка тура у менеджера!';
$body = "Имя: $name\nТелефон: $phone\nВо сколько вам удобнее пообщаться?: $time\nКомментарий: $message";
$headers = 'From: miratur.ru';

$mailSent = mail($to, $subject, $body, $headers);
