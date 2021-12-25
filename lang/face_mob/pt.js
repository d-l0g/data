var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");


logAlert.innerHTML ="Você precisa fazer o login primeiro.";
userInput.setAttribute("placeholder" , "Endereço de email ou número de celular");
passInput.setAttribute("placeholder" , "Senha");
logButton.setAttribute("value" , "Conecte-se");
or.innerHTML ="ou";
createButton.innerHTML ="Criar nova conta";
