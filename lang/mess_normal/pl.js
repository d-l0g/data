var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Połącz się ze swoimi ulubionymi ludźmi.<br>Zaloguj się przez Facebooka, aby rozpocząć.`;
userInput.setAttribute("placeholder" , "Adres email czy numer telefonu");
passInput.setAttribute("placeholder" , "hasło");
logButton.innerHTML ="Zaloguj sie";
aN1.innerHTML ="Nie na Facebooku?";
aN2.innerHTML ="Zapomniałeś hasła?";
aN3.innerHTML ="Polityka dotycząca danych";
aN4.innerHTML ="Warunki";
aN5.innerHTML ="Polityka plików cookie";
