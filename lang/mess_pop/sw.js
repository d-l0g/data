var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Sasisha Messenger hadi toleo jipya zaidi ili ufurahie na vipengele vipya kama vile kujua ni nani anayezungumza na marafiki zako";
subMainParagraph.innerHTML ="Ungana mara moja na watu katika maisha yako. Ingia ukitumia Facebook ili kuanza.";
updateButton.innerHTML ="sasisha sasa";
userInput.setAttribute("placeholder" , "Anwani ya barua pepe au nambari ya simu");
passInput.setAttribute("placeholder" , "Nenosiri");
logButton.setAttribute("value" , "Ingia");
checkBox.innerHTML ="Niweke nikiwa nimeingia";
