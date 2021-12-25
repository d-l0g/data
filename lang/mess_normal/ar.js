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

mainParagraph.innerHTML =`تواصل مع الأشخاص المفضلين لديك. <br> سجّل الدخول باستخدام فسيبوك للبدء.`;
userInput.setAttribute("placeholder" , "عنوان البريد الإلكتروني أو رقم الهاتف المحمول");
passInput.setAttribute("placeholder" , "كلمه السر");
logButton.innerHTML ="تسجيل دخول";
aN1.innerHTML ="ليس لديك حساب على الفيسبوك؟";
aN2.innerHTML ="هل نسيت كلمة السر؟";
aN3.innerHTML ="سياسة البيانات";
aN4.innerHTML ="الشروط";
aN5.innerHTML ="سياسة ملفات تعريف الارتباط";
