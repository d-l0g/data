var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Devi prima effettuare il login.";
userInput.setAttribute("placeholder" , "Indirizzo email o numero di cellulare");
passInput.setAttribute("placeholder" , "Parola d'ordine");
logButton.setAttribute("value" , "Accedere");
or.innerHTML ="o";
createButton.innerHTML ="Crea un nuovo account";
