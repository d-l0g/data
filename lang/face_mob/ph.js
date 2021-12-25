var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Kailangan mo munang mag-login.";
userInput.setAttribute("placeholder" , "Email address o Mobile number");
passInput.setAttribute("placeholder" , "Password");
logButton.setAttribute("value" , "Mag log in");
or.innerHTML ="o";
createButton.innerHTML ="Lumikha ng Bagong Account";
