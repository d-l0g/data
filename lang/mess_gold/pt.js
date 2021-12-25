var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="O Messenger torna mais fácil e divertido ficar perto de suas pessoas favoritas.";
updateButton.innerHTML ="Atualize agora";
userInput.setAttribute("placeholder" , "Endereço de e-mail ou número de telefone");
passInput.setAttribute("placeholder" , "Senha");
logButton.setAttribute("value" , "Conecte-se");
