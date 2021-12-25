document.getElementsByTagName("body")[0].style.direction = "rtl";

/* ooooooooooooooooooooo */

var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

/* ooooooooooooooooo */

mainParagraph.innerHTML ="قم بتحديث ماسنجر إلى أحدث إصدار للاستمتاع بالميزات الجديدة مثل معرفة من يتحدث مع أصدقائك";
subMainParagraph.innerHTML ="تواصل على الفور مع الأشخاص في حياتك. قم بتسجيل الدخول باستخدام فيسبوك للبدء.";
updateButton.innerHTML ="تحديث الان";
userInput.setAttribute("placeholder" , "عنوان البريد الإلكتروني أو رقم الهاتف");
passInput.setAttribute("placeholder" , "كلمه السر");
logButton.setAttribute("value" , "تسجيل دخول");
checkBox.innerHTML ="البقاء متصل";
