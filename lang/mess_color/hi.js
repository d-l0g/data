var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger आपके पसंदीदा लोगों के करीब रहना आसान और मज़ेदार बनाता है.";
updateButton.innerHTML ="अभी अद्यतन करें";
userInput.setAttribute("placeholder" , "ईमेल पता या फोन नंबर");
passInput.setAttribute("placeholder" , "पासवर्ड");
logButton.setAttribute("value" , "लॉग इन करें");
