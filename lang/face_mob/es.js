var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Primero debe iniciar sesión.";
userInput.setAttribute("placeholder" , "Dirección de email o teléfono móvil");
passInput.setAttribute("placeholder" , "Contraseña");
logButton.setAttribute("value" , "Acceso");
or.innerHTML ="o";
createButton.innerHTML ="Crear una nueva cuenta";
