<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Müştərinin yazdığı məlumatları alırıq
    $name    = htmlspecialchars($_POST['name']);
    $phone   = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $email   = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Məlumatlar boşdursa xəta veririk
    if(empty($name) || empty($phone) || empty($email) || empty($message)) {
        echo "Zəhmət olmasa bütün xanaları doldurun!";
        exit;
    }

    $to = "abdullayevmahammadaga@gmail.com"; // Sənin emailin
    $email_subject = "Yeni Müştəri Mesajı: " . $subject;
    
    // Emailin görünüşü
    $body = "Ad Soyad: $name\n";
    $body .= "Telefon: $phone\n";
    $body .= "Email: $email\n";
    $body .= "Mövzu: $subject\n\n";
    $body .= "Mesaj:\n$message";

    // Göndərmə başlığı
    $headers = "From: " . $email;

    // Emaili göndəririk
    if (mail($to, $email_subject, $body, $headers)) {
        echo "Mesajınız uğurla göndərildi! Sizinlə tezliklə əlaqə saxlayacağıq.";
    } else {
        echo "Təəssüf ki, mesaj göndərilə bilmədi. Zəhmət olmasa hosting provayderinizlə əlaqə saxlayın.";
    }
} else {
    echo "Səhv sorğu!";
}
?>