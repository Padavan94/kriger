<?php
echo $_POST['name'];
echo $_POST['mail'];
echo $_POST['phone'];
echo $_POST['capacity'];
echo $_POST['type'];
echo $_POST['oil'];

if((isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они


		$from = $_POST['mail'];
		$to = "webmarketingua@gmail.com";
		$subject = "garnetbuild - lp1";
		$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
					Форма обратной связи
						<table>
							<tbody>
								<tr>
									<td style="width: 100px;">Имя:</td>
									<td>'.$_POST['name'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Телефон:</td>
									<td>'.$_POST['phone'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Почта:</td>
									<td>'.$_POST['mail'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Мощность:</td>
									<td>'.$_POST['power'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Вид топлива:</td>
									<td>'.$_POST['oil'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Тип котла:</td>
									<td>'.$_POST['type'].'</td>
								</tr>
							</tbody>
						</table>                  
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги;
		
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= "From:" . $from;
		mail($to,$subject,$message, $headers);

}
?>