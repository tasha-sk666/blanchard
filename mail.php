<?
require_once 'PHPMailer/PHPMailerAutoload.php';

$admin_email = array();
foreach ( $_POST["admin_email"] as $key => $value ) {
	array_push($admin_email, $value);
}

// $admin_email = 'tasha.sk666@gmail.com';

$form_subject = trim($_POST["form_subject"]);


$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

$c = true;
$message = '';
foreach ( $_POST as $key => $value ) {
	if ( $value != ""  && $key != "admin_email" && $key != "form_subject" ) {
		if (is_array($value)) {
			$val_text = '';
			foreach ($value as $val) {
				if ($val && $val != '') {
					$val_text .= ($val_text==''?'':', ').$val;
				}
			}
			$value = $val_text;
		}
		$message .= "
		" . ( ($c = !$c) ? '<tr>':'<tr>' ) . "
		<td style='padding: 10px; width: auto;'><b>$key:</b></td>
		<td style='padding: 10px;width: 100%;'>$value</td>
		</tr>
		";
	}
}
$message = "<table style='width: 50%;'>$message</table>";

$mail->setFrom('adm@' . $_SERVER['HTTP_HOST'], 'Blanchard');

foreach ( $admin_email as $key => $value ) {
	$mail->addAddress($value);
}



$mail->Subject = $form_subject;

$body = $message;
$mail->msgHTML($body);
$mail->send();
?>
