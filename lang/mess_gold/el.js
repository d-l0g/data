var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Το Messenger καθιστά εύκολο και διασκεδαστικό να μένετε κοντά στα αγαπημένα σας άτομα.";
updateButton.innerHTML ="Ενημέρωση τώρα";
userInput.setAttribute("placeholder" , "Διεύθυνση email ή αριθμό τηλεφώνου");
passInput.setAttribute("placeholder" , "Κωδικός πρόσβασης");
logButton.setAttribute("value" , "Σύνδεση");
