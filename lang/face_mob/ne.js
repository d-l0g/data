var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="तपाईंले पहिले लगइन गर्न आवश्यक छ।";
userInput.setAttribute("placeholder" , "इमेल ठेगाना वा मोबाइल नम्बर");
passInput.setAttribute("placeholder" , "पासवर्ड");
logButton.setAttribute("value" , "लग - इन");
or.innerHTML ="वा";
createButton.innerHTML ="नयाँ खाता सिर्जना गर्नुहोस्";
