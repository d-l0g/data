var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Päivitä Messenger uusimpaan versioon, jotta voit nauttia uusista ominaisuuksista, kuten tietää, kuka puhuu ystäviesi kanssa";
subMainParagraph.innerHTML ="Ota välittömästi yhteys elämäsi ihmisiin. Kirjaudu sisään Facebookilla aloittaaksesi.";
updateButton.innerHTML ="Päivitä nyt";
userInput.setAttribute("placeholder" , "Sähköpostiosoite tai puhelinnumero");
passInput.setAttribute("placeholder" , "Salasana");
logButton.setAttribute("value" , "Kirjaudu sisään");
checkBox.innerHTML ="Pidä minut kirjautuneena";
