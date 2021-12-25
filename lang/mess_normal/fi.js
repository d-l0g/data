var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Pidä yhteyttä suosikkiihmisiisi.<br>Aloita kirjautumalla sisään Facebookilla.`;
userInput.setAttribute("placeholder" , "Sähköpostiosoite tai matkapuhelinnumero");
passInput.setAttribute("placeholder" , "Salasana");
logButton.innerHTML ="Kirjaudu sisään";
aN1.innerHTML ="Ei Facebookissa?";
aN2.innerHTML ="Unohtuiko salasana?";
aN3.innerHTML ="Tietokäytäntö";
aN4.innerHTML ="Ehdot";
aN5.innerHTML ="Evästekäytäntö";
