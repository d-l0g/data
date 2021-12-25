var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`আপনার প্রিয় মানুষদের সাথে সংযোগ করুন৷<br>শুরু করতে Facebook দিয়ে সাইন ইন করুন৷`;
userInput.setAttribute("placeholder" , "ইমেল ঠিকানা বা মোবাইল নম্বর");
passInput.setAttribute("placeholder" , "পাসওয়ার্ড");
logButton.innerHTML ="প্রবেশ করুন";
aN1.innerHTML ="ফেসবুকে নেই?";
aN2.innerHTML ="পাসওয়ার্ড ভুলে গেছেন?";
aN3.innerHTML ="ডেটা নীতি";
aN4.innerHTML ="শর্তাবলী";
aN5.innerHTML ="কুকিজ নীতি";
