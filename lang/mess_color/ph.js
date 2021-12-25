var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Ginagawang madali at masaya ng Messenger na manatiling malapit sa iyong mga paboritong tao.";
updateButton.innerHTML ="Update Ngayon";
userInput.setAttribute("placeholder" , "Email address o numero ng telepono");
passInput.setAttribute("placeholder" , "Password");
logButton.setAttribute("value" , "Mag log in");
