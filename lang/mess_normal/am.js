var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`ከሚወዷቸው ሰዎች ጋር ይገናኙ።<br>ለመጀመር በፌስቡክ ይግቡ።`;
userInput.setAttribute("placeholder" , "ኢሜል አድራሻ ወይም የሞባይል ቁጥር");
passInput.setAttribute("placeholder" , "ፕስወርድ");
logButton.innerHTML ="ግባ";
aN1.innerHTML ="ፌስቡክ ላይ አይደለም?";
aN2.innerHTML ="መክፈቻ ቁልፉን ረሳኽው?";
aN3.innerHTML ="የውሂብ ፖሊሲ";
aN4.innerHTML ="ውሎች";
aN5.innerHTML ="የኩኪዎች ፖሊሲ";
