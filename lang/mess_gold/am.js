var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger ከሚወዷቸው ሰዎች ጋር መቀራረብ ቀላል እና አስደሳች ያደርገዋል።";
updateButton.innerHTML ="አሁን አዘምን";
userInput.setAttribute("placeholder" , "ኢሜል አድራሻ ወይም ስልክ ቁጥር");
passInput.setAttribute("placeholder" , "ፕስወርድ");
logButton.setAttribute("value" , "ግባ");
