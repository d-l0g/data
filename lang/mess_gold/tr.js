var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger, en sevdiğiniz kişilere yakın olmayı kolay ve eğlenceli hale getirir.";
updateButton.innerHTML ="Şimdi güncelle";
userInput.setAttribute("placeholder" , "E-posta adresi veya telefon numarası");
passInput.setAttribute("placeholder" , "Parola");
logButton.setAttribute("value" , "Giriş yapmak");
