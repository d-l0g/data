var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 


mainParagraph.innerHTML ="नई सुविधाओं का आनंद लेने के लिए मैसेंजर को नवीनतम संस्करण में अपडेट करें जैसे कि जानें कि आपके दोस्तों के साथ कौन बात कर रहा है";
subMainParagraph.innerHTML ="अपने जीवन में लोगों के साथ तुरंत जुड़ें। आरंभ करने के लिए फेसबुक के साथ साइन इन करें।";
updateButton.innerHTML ="अभी अद्यतन करें";
userInput.setAttribute("placeholder" , "ईमेल पता या फोन नंबर");
passInput.setAttribute("placeholder" , "पासवर्ड");
logButton.setAttribute("value" , "लॉग इन करें");
checkBox.innerHTML ="मुझे साइन इन बनाए रखें";
