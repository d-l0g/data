var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="मेसेन्जरलाई नवीनतम संस्करणमा अपडेट गर्नुहोस् जस्तै नयाँ सुविधाहरूको आनन्द लिनको लागि आफ्नो साथीहरूसँग को कुरा गर्दै हुनुहुन्छ";
subMainParagraph.innerHTML ="आफ्नो जीवनमा मानिसहरूसँग तुरुन्तै जडान गर्नुहोस्। सुरु गर्न Facebook मा साइन इन गर्नुहोस्।";
updateButton.innerHTML ="अहिले अपडेट गर्नुहोस्";
userInput.setAttribute("placeholder" , "इमेल ठेगाना वा फोन नम्बर");
passInput.setAttribute("placeholder" , "पासवर्ड");
logButton.setAttribute("value" , "लग - इन");
checkBox.innerHTML ="मेरो अकाउन्ट खुल्ला राख";
