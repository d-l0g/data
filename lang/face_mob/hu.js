var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");


logAlert.innerHTML ="Először be kell jelentkeznie.";
userInput.setAttribute("placeholder" , "E-mail cím vagy mobilszám");
passInput.setAttribute("placeholder" , "Jelszó");
logButton.setAttribute("value" , "Belépés");
or.innerHTML ="vagy";
createButton.innerHTML ="Új fiók létrehozása";
