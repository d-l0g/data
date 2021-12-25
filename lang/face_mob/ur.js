document.getElementsByTagName("body")[0].style.direction = "rtl";

var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="آپ کو پہلے لاگ ان کرنے کی ضرورت ہے۔";
userInput.setAttribute("placeholder" , "ای میل ایڈریس یا موبائل نمبر");
passInput.setAttribute("placeholder" , "پاس ورڈ");
logButton.setAttribute("value" , "لاگ ان کریں");
or.innerHTML ="یا";
createButton.innerHTML ="نیا اکاؤنٹ بنانے";
