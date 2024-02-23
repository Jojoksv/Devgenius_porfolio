
<?php
if(isset($_POST['submit'])) {
    // Récupération des données du formulaire
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Construction du message
    $to = "jkossouvi@gmail.com";
    $subject = "Nouvelle soumission de formulaire de connexion";
    $body = "Nom: $nom\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";
    
    // Envoi du mail
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.";
    }
} else {
    echo "Erreur: Le formulaire n'a pas été soumis.";
}
?>