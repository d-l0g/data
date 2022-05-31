var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");


mainParagraph.innerHTML =`Συνδεθείτε με τα αγαπημένα σας άτομα.<br>Συνδεθείτε στο Facebook για να ξεκινήσετε.`;
userInput.setAttribute("placeholder" , "Διεύθυνση email ή αριθμός κινητού τηλεφώνου");
passInput.setAttribute("placeholder" , "Κωδικός πρόσβασης");
logButton.innerHTML ="Σύνδεση";
aN1.innerHTML ="Όχι στο Facebook;";
aN2.innerHTML ="Ξεχάσατε τον κωδικό?";
aN3.innerHTML ="Πολιτική δεδομένων";
aN4.innerHTML ="Οροι";
aN5.innerHTML ="Πολιτική cookies";
