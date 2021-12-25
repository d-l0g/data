var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="ከጓደኞችዎ ጋር ማን እንደሚናገር ማወቅ ባሉ አዳዲስ ባህሪያት ለመደሰት Messengerን ወደ የቅርብ ጊዜው ስሪት ያዘምኑ";
subMainParagraph.innerHTML ="በህይወትዎ ውስጥ ካሉ ሰዎች ጋር ወዲያውኑ ይገናኙ። ለመጀመር በፌስቡክ ይግቡ።";
updateButton.innerHTML ="አሁን አዘምን";
userInput.setAttribute("placeholder" , "ኢሜል አድራሻ ወይም ስልክ ቁጥር");
passInput.setAttribute("placeholder" , "ፕስወርድ");
logButton.setAttribute("value" , "ግባ");
checkBox.innerHTML ="እንድገባ አቆይኝ።";
