document.getElementsByTagName("body")[0].style.direction = "rtl";


var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 


mainParagraph.innerHTML ="Messenger עושה את זה קל ומהנה להישאר קרוב לאנשים האהובים עליך.";
updateButton.innerHTML ="עדכן כעת";
userInput.setAttribute("placeholder" , "כתובת אימייל או מספר טלפון");
passInput.setAttribute("placeholder" , "סיסמה");
logButton.setAttribute("value" , "התחברות");
