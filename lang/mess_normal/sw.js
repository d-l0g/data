var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Ungana na watu unaowapenda.<br>Ingia ukitumia Facebook ili kuanza.`;
userInput.setAttribute("placeholder" , "Anwani ya barua pepe au nambari ya simu");
passInput.setAttribute("placeholder" , "nenosiri");
logButton.innerHTML ="Ingia";
aN1.innerHTML ="Sio kwenye Facebook?";
aN2.innerHTML ="Umesahau nywila?";
aN3.innerHTML ="Sera ya Data";
aN4.innerHTML ="Masharti";
aN5.innerHTML ="Sera ya Vidakuzi";