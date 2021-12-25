document.getElementsByTagName("body")[0].style.direction = "rtl";

var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`התחבר לאנשים האהובים עליך.<br>היכנס עם Facebook כדי להתחיל.`;
userInput.setAttribute("placeholder" , "כתובת אימייל או מספר טלפון");
passInput.setAttribute("placeholder" , "סיסמה");
logButton.innerHTML ="התחברות";
aN1.innerHTML ="לא בפייסבוק?";
aN2.innerHTML ="שכחת ססמא?";
aN3.innerHTML ="מדיניות נתונים";
aN4.innerHTML ="תנאים";
aN5.innerHTML ="מדיניות קובצי Cookie";
