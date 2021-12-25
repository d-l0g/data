var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="প্রথমে আপনাকে প্রবেশ করতে হবে.";
userInput.setAttribute("placeholder" , "ইমেল ঠিকানা বা মোবাইল নম্বর");
passInput.setAttribute("placeholder" , "পাসওয়ার্ড");
logButton.setAttribute("value" , "প্রবেশ করুন");
or.innerHTML ="বা";
createButton.innerHTML ="নতুন অ্যাকাউন্ট তৈরি";

