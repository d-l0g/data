var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Díky Messengeru je snadné a zábavné zůstat nablízku svým oblíbeným lidem.";
updateButton.innerHTML ="Nyní aktualizovat";
userInput.setAttribute("placeholder" , "E-mailová adresa nebo telefonní číslo");
passInput.setAttribute("placeholder" , "Heslo");
logButton.setAttribute("value" , "Přihlásit se");
