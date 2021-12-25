var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Първо трябва да влезете.";
userInput.setAttribute("placeholder" , "Имейл адрес или мобилен номер");
passInput.setAttribute("placeholder" , "парола");
logButton.setAttribute("value" , "Влизам");
or.innerHTML ="или";
createButton.innerHTML ="Създаване на нов акаунт";
