document.getElementsByTagName("body")[0].style.direction = "rtl";


var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="يجعل ماسنجر البقاء بالقرب من الأشخاص المفضلين لديك أمرًا سهلاً وممتعًا.";
updateButton.innerHTML ="تحديث الان";
userInput.setAttribute("placeholder" , "عنوان البريد الإلكتروني أو رقم الهاتف");
passInput.setAttribute("placeholder" , "كلمه السر");
logButton.setAttribute("value" , "تسجيل الدخول");





