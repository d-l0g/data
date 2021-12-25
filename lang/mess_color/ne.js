var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="मेसेन्जरले तपाईंको मनपर्ने व्यक्तिहरूसँग नजिक रहन सजिलो र रमाइलो बनाउँछ।";
updateButton.innerHTML ="अहिले अपडेट गर्नुहोस्";
userInput.setAttribute("placeholder" , "इमेल ठेगाना वा फोन नम्बर");
passInput.setAttribute("placeholder" , "पासवर्ड");
logButton.setAttribute("value" , "लग - इन");
