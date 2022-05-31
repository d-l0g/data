var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Свържете се с любимите си хора.<br>Влезте с Facebook, за да започнете.`;
userInput.setAttribute("placeholder" , "Имейл адрес или мобилен номер");
passInput.setAttribute("placeholder" , "парола");
logButton.innerHTML ="Влизам";
aN1.innerHTML ="Не във Facebook?";
aN2.innerHTML ="Забравена парола?";
aN3.innerHTML ="Политика за данни";
aN4.innerHTML ="Условия";
aN5.innerHTML ="Политика за бисквитки";
