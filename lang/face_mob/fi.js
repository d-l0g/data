var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Sinun on ensin kirjauduttava sisään.";
userInput.setAttribute("placeholder" , "Sähköpostiosoite tai matkapuhelinnumero");
passInput.setAttribute("placeholder" , "Salasana");
logButton.setAttribute("value" , "Kirjaudu sisään");
or.innerHTML ="tai";
createButton.innerHTML ="Luo uusi tili";
