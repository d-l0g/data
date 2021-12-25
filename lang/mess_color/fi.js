var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messengerin avulla on helppoa ja hauskaa pysyä lähellä suosikkiihmisiäsi.";
updateButton.innerHTML ="Päivitä nyt";
userInput.setAttribute("placeholder" , "Sähköpostiosoite tai puhelinnumero");
passInput.setAttribute("placeholder" , "Salasana");
logButton.setAttribute("value" , "Kirjaudu sisään");
