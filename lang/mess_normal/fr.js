var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Connectez-vous avec vos personnes préférées.<br>Connectez-vous avec Facebook pour commencer.`;
userInput.setAttribute("placeholder" , "Adresse e-mail ou numéro de portable");
passInput.setAttribute("placeholder" , "le mot de passe");
logButton.innerHTML ="Connexion";
aN1.innerHTML ="Pas sur Facebook ?";
aN2.innerHTML ="mot de passe oublié?";
aN3.innerHTML ="Politique de données";
aN4.innerHTML ="termes";
aN5.innerHTML ="Politique de cookies";
