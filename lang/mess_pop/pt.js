var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 


mainParagraph.innerHTML ="Atualize o Messenger para a versão mais recente para aproveitar os novos recursos, como saber quem está conversando com seus amigos";
subMainParagraph.innerHTML ="Conecte-se instantaneamente com as pessoas em sua vida. Faça login no Facebook para começar.";
updateButton.innerHTML ="atualize agora";
userInput.setAttribute("placeholder" , "Endereço de e-mail ou número de telefone");
passInput.setAttribute("placeholder" , "Senha");
logButton.setAttribute("value" , "Conecte-se");
checkBox.innerHTML ="Mantenha-me conectado";
