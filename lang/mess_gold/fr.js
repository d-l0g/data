var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger rend facile et amusant de rester proche de vos personnes préférées.";
updateButton.innerHTML ="Mettez à jour maintenant";
userInput.setAttribute("placeholder" , "Adresse e-mail ou numéro de téléphone");
passInput.setAttribute("placeholder" , "Mot de passe");
logButton.setAttribute("value" , "Connexion");
