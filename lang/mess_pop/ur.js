document.getElementsByTagName("body")[0].style.direction = "rtl";

/* ooooooooooooooooooooo */

var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="میسنجر کو تازہ ترین ورژن میں اپ ڈیٹ کریں تاکہ نئی خصوصیات جیسے جانیں کہ آپ کے دوستوں کے ساتھ کون بات کر رہا ہے۔";
subMainParagraph.innerHTML ="اپنی زندگی میں لوگوں سے فوری طور پر جڑیں۔ شروع کرنے کے لیے Facebook کے ساتھ سائن ان کریں۔";
updateButton.innerHTML ="تازہ ترین کریں. جدید بنایں";
userInput.setAttribute("placeholder" , "ای میل ایڈریس یا فون نمبر");
passInput.setAttribute("placeholder" , "پاس ورڈ");
logButton.setAttribute("value" , "لاگ ان کریں");
checkBox.innerHTML ="مجھے سائن ان رکھیں";


