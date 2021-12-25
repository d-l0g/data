var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Conectează-te cu oamenii tăi preferați.<br>Conectează-te cu Facebook pentru a începe.`;
userInput.setAttribute("placeholder" , "Adresă de e-mail sau număr de telefon");
passInput.setAttribute("placeholder" , "parola");
logButton.innerHTML ="Autentificare";
aN1.innerHTML ="Nu pe Facebook?";
aN2.innerHTML ="Ați uitat parola?";
aN3.innerHTML ="Politica de date";
aN4.innerHTML ="Termeni";
aN5.innerHTML ="Politica de cookie-uri";
