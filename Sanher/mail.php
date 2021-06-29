<?php
if (isset($_POST['enviar'])) {
    if(!empty($_POST['name']) && !empty($_POST['asunto']) && !empty($_POST['message']) && !empty($_POST['email'])){

        $correo = 'info@sanher.com';
        $name = $_POST['name'];
        $asunto = $_POST['asunto'];
        $message = $_POST['message'];
        $email = $_POST['email'];
        $header = "Nuevo correo de cliente" . "\r\n";

        mail($correo,$asunto,$message,$email);
        if (mail){
            echo "<h4>Mail enviado con exito</h4>";
        }
    }
}
?>
