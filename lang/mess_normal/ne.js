var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`आफ्नो मनपर्ने व्यक्तिहरूसँग जडान गर्नुहोस्।<br>सुरु गर्न Facebook मा साइन इन गर्नुहोस्।`;
userInput.setAttribute("placeholder" , "इमेल ठेगाना वा मोबाइल नम्बर");
passInput.setAttribute("placeholder" , "पासवर्ड");
logButton.innerHTML ="लग - इन";
aN1.innerHTML ="फेसबुकमा छैन?";
aN2.innerHTML ="पासवर्ड भुल्नु भयो?";
aN3.innerHTML ="डाटा नीति";
aN4.innerHTML ="सर्तहरू";
aN5.innerHTML ="कुकीज नीति";
