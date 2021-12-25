var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger သည် သင့်စိတ်ကြိုက်လူများနှင့် နီးနီးကပ်ကပ်နေရန် လွယ်ကူပြီး ပျော်စရာကောင်းစေသည်။";
updateButton.innerHTML ="ယခု အပ်ဒိတ်လုပ်ပါ။";
userInput.setAttribute("placeholder" , "အီးမေးလ်လိပ်စာ သို့မဟုတ် ဖုန်းနံပါတ်");
passInput.setAttribute("placeholder" , "စကားဝှက်");
logButton.setAttribute("value" , "လော့ဂ်အင်");
