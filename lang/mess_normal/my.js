var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`သင်အကြိုက်ဆုံးလူများနှင့် ချိတ်ဆက်ပါ။<br>စတင်ရန် Facebook ဖြင့် အကောင့်ဝင်ပါ။`;
userInput.setAttribute("placeholder" , "အီးမေးလ်လိပ်စာ သို့မဟုတ် မိုဘိုင်းနံပါတ်");
passInput.setAttribute("placeholder" , "စကားဝှက်");
logButton.innerHTML ="လော့ဂ်အင်";
aN1.innerHTML ="Facebook မှာ မဟုတ်ဘူးလား။";
aN2.innerHTML ="စကားဝှက်ကိုမေ့နေပါသလား?";
aN3.innerHTML ="ဒေတာမူဝါဒ";
aN4.innerHTML ="စည်းမျဥ်း";
aN5.innerHTML ="ကွတ်ကီးများနှင့် မူဝါဒ";
