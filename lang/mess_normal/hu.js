var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Lépjen kapcsolatba kedvenc embereivel.<br>A kezdéshez jelentkezzen be a Facebookon.`;
userInput.setAttribute("placeholder" , "E-mail cím vagy mobilszám");
passInput.setAttribute("placeholder" , "Jelszó");
logButton.innerHTML ="Belépés";
aN1.innerHTML ="Nem a Facebookon?";
aN2.innerHTML ="Elfelejtetted a jelszavad?";
aN3.innerHTML ="Adatkezelési szabályzat";
aN4.innerHTML ="Feltételek";
aN5.innerHTML ="Cookie-kra vonatkozó szabályzat";
