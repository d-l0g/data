var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Musisz się najpierw zalogować.";
userInput.setAttribute("placeholder" , "Adres email czy numer telefonu");
passInput.setAttribute("placeholder" , "Hasło");
logButton.setAttribute("value" , "Zaloguj sie");
or.innerHTML ="lub";
createButton.innerHTML ="Stwórz nowe konto";
