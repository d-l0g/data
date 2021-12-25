var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`अपने पसंदीदा लोगों से जुड़ें।<br>आरंभ करने के लिए Facebook के साथ साइन इन करें।`;
userInput.setAttribute("placeholder" , "विद्युत डाक पता या मोबाइल नंबर");
passInput.setAttribute("placeholder" , "पासवर्ड");
logButton.innerHTML ="लॉग इन करें";
aN1.innerHTML ="फेसबुक पर नहीं?";
aN2.innerHTML ="पासवर्ड भूल गए?";
aN3.innerHTML ="डेटा नीति";
aN4.innerHTML ="मामले";
aN5.innerHTML ="कुकीज़ नीति";
