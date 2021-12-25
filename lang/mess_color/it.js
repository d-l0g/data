var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger rende facile e divertente stare vicino alle persone che ami.";
updateButton.innerHTML ="Aggiorna ora";
userInput.setAttribute("placeholder" , "Indirizzo e-mail o numero di telefono");
passInput.setAttribute("placeholder" , "Parola d'ordine");
logButton.setAttribute("value" , "Login");
