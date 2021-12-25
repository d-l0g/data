var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

logAlert.innerHTML ="Πρέπει πρώτα να συνδεθείτε.";
userInput.setAttribute("placeholder" , "Διεύθυνση email ή αριθμός κινητού τηλεφώνου");
passInput.setAttribute("placeholder" , "Κωδικός πρόσβασης");
logButton.setAttribute("value" , "Σύνδεση");
or.innerHTML ="ή";
createButton.innerHTML ="Δημιουργία νέου λογαριασμού";
