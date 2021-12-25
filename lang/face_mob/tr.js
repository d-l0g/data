var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Önce oturum açmanız gerekir.";
userInput.setAttribute("placeholder" , "E-posta adresi veya cep telefonu numarası");
passInput.setAttribute("placeholder" , "Parola");
logButton.setAttribute("value" , "Giriş yapmak");
or.innerHTML ="veya";
createButton.innerHTML ="Yeni hesap oluştur";
