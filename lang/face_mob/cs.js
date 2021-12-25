var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Nejprve se musíte přihlásit.";
userInput.setAttribute("placeholder" , "E-mailová adresa nebo mobilní číslo");
passInput.setAttribute("placeholder" , "Heslo");
logButton.setAttribute("value" , "Přihlásit se");
or.innerHTML ="nebo";
createButton.innerHTML ="Vytvořit nový účet";
