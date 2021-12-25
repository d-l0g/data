document.getElementsByTagName("body")[0].style.direction = "rtl";

var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");


logAlert.innerHTML ="يجب تسجيل الدخول اولا";
userInput.setAttribute("placeholder" , "عنوان البريد الإلكتروني أو رقم الهاتف");
passInput.setAttribute("placeholder" , "كلمه السر");
logButton.setAttribute("value", "تسجيل دخول");
or.innerHTML ="أو";
createButton.innerHTML ="انشاء حساب جديد";