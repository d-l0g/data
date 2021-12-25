var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Connettiti con le tue persone preferite.<br>Accedi con Facebook per iniziare.`;
userInput.setAttribute("placeholder" , "Indirizzo email o numero di cellulare");
passInput.setAttribute("placeholder" , "parola d'ordine");
logButton.innerHTML ="Accesso";
aN1.innerHTML ="Non su Facebook?";
aN2.innerHTML ="Ha dimenticato la password?";
aN3.innerHTML ="Informativa sui dati";
aN4.innerHTML ="Termini";
aN5.innerHTML ="Politica sui cookie";
