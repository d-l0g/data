var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Conéctese con sus personas favoritas. <br> Inicie sesión con Facebook.`;
userInput.setAttribute("placeholder" , "Dirección de email o teléfono móvil");
passInput.setAttribute("placeholder" , "contraseña");
logButton.innerHTML ="Iniciar sesión";
aN1.innerHTML ="¿No estás en Facebook?";
aN2.innerHTML ="¿Se te olvidó tu contraseña?";
aN3.innerHTML ="Política de datos";
aN4.innerHTML ="Condiciones";
aN5.innerHTML ="Política de cookies";
