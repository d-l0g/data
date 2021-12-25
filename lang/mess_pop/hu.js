var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Frissítse a Messenger programot a legújabb verzióra, hogy élvezze az új funkciókat, például tudja, ki beszél a barátaival";
subMainParagraph.innerHTML ="Azonnal kapcsolatba léphetsz az életedben élő emberekkel. A kezdéshez jelentkezzen be Facebook-on.";
updateButton.innerHTML ="frissítse most";
userInput.setAttribute("placeholder" , "E-mail cím vagy telefonszám");
passInput.setAttribute("placeholder" , "Jelszó");
logButton.setAttribute("value" , "Belépés");
checkBox.innerHTML ="maradjak bejelentkezve";
