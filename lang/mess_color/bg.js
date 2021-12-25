var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger прави лесно и забавно да останете близо до любимите си хора.";
updateButton.innerHTML ="Актуализирайте сега";
userInput.setAttribute("placeholder" , "Имейл адрес или телефонен номер");
passInput.setAttribute("placeholder" , "парола");
logButton.setAttribute("value" , "Влизам");
