document.getElementsByTagName("body")[0].style.direction = "rtl";

/* ooooooooooooooooooooo */

var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="עדכן את Messenger לגרסה האחרונה כדי ליהנות מהתכונות החדשות כמו לדעת מי מדבר עם החברים שלך";
subMainParagraph.innerHTML ="התחבר באופן מיידי לאנשים בחייך. היכנס עם פייסבוק כדי להתחיל.";
updateButton.innerHTML ="עדכן כעת";
userInput.setAttribute("placeholder" , "כתובת אימייל או מספר טלפון");
passInput.setAttribute("placeholder" , "סיסמה");
logButton.setAttribute("value" , "התחברות");
checkBox.innerHTML ="השאר אותי מחובר";
