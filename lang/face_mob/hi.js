var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="आपको पहले लॉग इन करने की जरूरत है।";
userInput.setAttribute("placeholder" , "विद्युत डाक पता या मोबाइल नंबर");
passInput.setAttribute("placeholder" , "पासवर्ड");
logButton.setAttribute("value" , "लॉग इन करें");
or.innerHTML ="या";
createButton.innerHTML ="नया खाता बनाएँ";
