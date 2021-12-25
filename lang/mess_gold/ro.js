var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger face ca este ușor și distractiv să stai aproape de oamenii tăi preferați.";
updateButton.innerHTML ="Actualizează acum";
userInput.setAttribute("placeholder" , "Adresă de e-mail sau număr de telefon");
passInput.setAttribute("placeholder" , "Parola");
logButton.setAttribute("value" , "Autentificare");
