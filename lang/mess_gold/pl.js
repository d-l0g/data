var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger sprawia, że przebywanie blisko ulubionych osób jest łatwe i przyjemne.";
updateButton.innerHTML ="Aktualizuj teraz";
userInput.setAttribute("placeholder" , "Adres e-mail lub numer telefonu");
passInput.setAttribute("placeholder" , "Hasło");
logButton.setAttribute("value" , "Zaloguj sie");
