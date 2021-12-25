var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Kumonekta sa iyong mga paboritong tao.<br>Mag-sign in gamit ang Facebook upang makapagsimula.`;
userInput.setAttribute("placeholder" , "Email address o numero ng mobile");
passInput.setAttribute("placeholder" , "password");
logButton.innerHTML ="Mag log in";
aN1.innerHTML ="Wala sa Facebook?";
aN2.innerHTML ="Nakalimutan ang password?";
aN3.innerHTML ="Patakaran sa Data";
aN4.innerHTML ="Mga tuntunin";
aN5.innerHTML ="Patakaran sa Cookies";
