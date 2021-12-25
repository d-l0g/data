var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 


mainParagraph.innerHTML ="A Messenger segítségével egyszerűen és szórakoztatóan közel maradhat kedvenc embereihez.";
updateButton.innerHTML ="Frissítse most";
userInput.setAttribute("placeholder" , "E-mail cím vagy telefonszám");
passInput.setAttribute("placeholder" , "Jelszó");
logButton.setAttribute("value" , "Belépés");
