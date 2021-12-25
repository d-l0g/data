document.getElementsByTagName("body")[0].style.direction = "rtl";


var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="میسنجر آپ کے پسندیدہ لوگوں کے قریب رہنا آسان اور پرلطف بناتا ہے۔";
updateButton.innerHTML ="تازہ ترین کریں. جدید بنایں";
userInput.setAttribute("placeholder" , "ای میل ایڈریس یا فون نمبر");
passInput.setAttribute("placeholder" , "پاس ورڈ");
logButton.setAttribute("value" , "لاگ ان کریں");
