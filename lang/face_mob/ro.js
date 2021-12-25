var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");


logAlert.innerHTML ="Mai întâi trebuie să vă autentificați.";
userInput.setAttribute("placeholder" , "Adresă de e-mail sau număr de telefon");
passInput.setAttribute("placeholder" , "Parola");
logButton.setAttribute("value" , "Log in");
or.innerHTML ="sau";
createButton.innerHTML ="Creează un cont nou";
