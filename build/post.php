<?php 
if (isset($_POST['name'], $_POST['name']))
    {
        $to      = 'padavan94@gmail.com';
        $subject = $_POST['title'];
        $text = isset($_POST['message']) ? $_POST['message'] : '';
        $message = 'ИжШкаф новый заказ от '. $_POST['name']. PHP_EOL .'Номер телефона: '. $_POST['phone'].PHP_EOL. $text;
        $headers = 'Content-type: text/html;charset=UTF-8 ' . PHP_EOL;//.'From: webmaster@example.com' . "\r\n" .           'Reply-To: webmaster@example.com' . "\r\n";

        mail($to, $subject, $message, $headers);
    } 
?>