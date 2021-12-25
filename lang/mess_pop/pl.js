var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 


mainParagraph.innerHTML ="Zaktualizuj Messengera do najnowszej wersji, aby cieszyć się nowymi funkcjami, takimi jak wiedzieć, kto rozmawia ze znajomymi";
subMainParagraph.innerHTML ="Błyskawicznie łącz się z ludźmi w swoim życiu. Zaloguj się przez Facebooka, aby rozpocząć.";
updateButton.innerHTML ="Aktualizuj teraz";
userInput.setAttribute("placeholder" , "Adres e-mail lub numer telefonu");
passInput.setAttribute("placeholder" , "Hasło");
logButton.setAttribute("value" , "Zaloguj sie");
checkBox.innerHTML ="Nie wylogowuj mnie";
