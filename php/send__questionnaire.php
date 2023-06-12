<?php
$name = $_POST['name'];
$date = $_POST['date'];
$people = $_POST['people'];
$countries = $_POST['countries'];
$vacation = $_POST['vacation'];
$lastVacation = $_POST['last-vacation'];
$feedback = $_POST['last-feedback'];

$to = 'miratur.spb@mail.ru';
$subject = 'Ответ на 7 вопросов';
$body = "1. Как вас зовут?: $name\n
2. Когда планируете отдых?: $date\n
3. Сколько человек летит с вами (если есть дети, указать
возраст)?: $people\n
4. Какие страны предпочтительны для отдыха?: $countries\n
5. Вы предпочитаете пляжный или экскурсионный отдых?: $vacation\n
6. Что вам не понравилось в вашу предыдущую поездку?: $lastVacation\n
7. Удобный способ связи?: $feedback";
$headers = "From: miratur.ru";

$mailSent = mail($to, $subject, $body, $headers);
