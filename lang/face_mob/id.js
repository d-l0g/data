var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Anda harus login terlebih dahulu.";
userInput.setAttribute("placeholder" , "Alamat email atau nomor ponsel");
passInput.setAttribute("placeholder" , "Kata sandi");
logButton.setAttribute("value" , "Gabung");
or.innerHTML ="atau";
createButton.innerHTML ="Buat akun baru";
