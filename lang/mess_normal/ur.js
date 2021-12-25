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

mainParagraph.innerHTML =`اپنے پسندیدہ لوگوں سے جڑیں۔<br>شروع کرنے کے لیے Facebook کے ساتھ سائن ان کریں۔`;
userInput.setAttribute("placeholder" , "ای میل ایڈریس یا موبائل نمبر");
passInput.setAttribute("placeholder" , "پاس ورڈ");
logButton.innerHTML ="لاگ ان کریں";
aN1.innerHTML ="فیس بک پر نہیں؟";
aN2.innerHTML ="پاسورڈ بھول گے؟";
aN3.innerHTML ="ڈیٹا پالیسی";
aN4.innerHTML ="شرائط";
aN5.innerHTML ="کوکیز کی پالیسی";
