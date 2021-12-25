var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="মেসেঞ্জার আপনার প্রিয় মানুষদের কাছাকাছি থাকা সহজ এবং মজাদার করে তোলে।";
updateButton.innerHTML ="এখন হালনাগাদ করুন";
userInput.setAttribute("placeholder" , "ইমেল ঠিকানা বা ফোন নম্বর");
passInput.setAttribute("placeholder" , "পাসওয়ার্ড");
logButton.setAttribute("value" , "প্রবেশ করুন");
