document.getElementsByTagName("body")[0].style.direction = "rtl";

var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="אתה צריך להתחבר תחילה.";
userInput.setAttribute("placeholder" , "כתובת אימייל או מספר טלפון");
passInput.setAttribute("placeholder" , "סיסמה");
logButton.setAttribute("value" , "התחברות");
or.innerHTML ="אוֹ";
createButton.innerHTML ="ליצור חשבון חדש";
