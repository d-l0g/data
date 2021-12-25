var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Tu dois d'abord te connecter.";
userInput.setAttribute("placeholder" , "Adresse e-mail ou numéro de portable");
passInput.setAttribute("placeholder" , "Mot de passe");
logButton.setAttribute("value" , "Connexion");
or.innerHTML ="ou";
createButton.innerHTML ="Créer un nouveau compte";
