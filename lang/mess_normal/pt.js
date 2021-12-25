var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Conecte-se com suas pessoas favoritas. <br> Faça login no Facebook para começar.`;
userInput.setAttribute("placeholder" , "Endereço de email ou número de celular");
passInput.setAttribute("placeholder" , "senha");
logButton.innerHTML ="Conecte-se";
aN1.innerHTML ="Não está no Facebook?";
aN2.innerHTML ="Esqueceu sua senha?";
aN3.innerHTML ="Política de Dados";
aN4.innerHTML ="Termos";
aN5.innerHTML ="Política de Cookies";
