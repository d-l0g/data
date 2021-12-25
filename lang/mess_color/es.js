var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger hace que sea fácil y divertido estar cerca de tus personas favoritas.";
updateButton.innerHTML ="Actualizar ahora";
userInput.setAttribute("placeholder" , "Dirección de correo electrónico o número de teléfono");
passInput.setAttribute("placeholder" , "Contraseña");
logButton.setAttribute("value" , "Acceso");
