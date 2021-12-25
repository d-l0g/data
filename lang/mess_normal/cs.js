var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Spojte se se svými oblíbenými lidmi.<br>Začněte přihlášením pomocí Facebooku.`;
userInput.setAttribute("placeholder" , "E-mailová adresa nebo mobilní číslo");
passInput.setAttribute("placeholder" , "Heslo");
logButton.innerHTML ="Přihlásit se";
aN1.innerHTML ="Nejste na Facebooku?";
aN2.innerHTML ="Zapomenuté heslo?";
aN3.innerHTML ="Zásady údajů";
aN4.innerHTML ="Podmínky";
aN5.innerHTML ="Zásady používání souborů cookie";
