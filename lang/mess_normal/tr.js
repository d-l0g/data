var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`En sevdiğiniz kişilerle bağlantı kurun.<br>Başlamak için Facebook ile oturum açın.`;
userInput.setAttribute("placeholder" , "E-posta adresi veya cep telefonu numarası");
passInput.setAttribute("placeholder" , "parola");
logButton.innerHTML ="Giriş yapmak";
aN1.innerHTML ="Facebook'ta değil mi?";
aN2.innerHTML ="Parolanızı mı unuttunuz?";
aN3.innerHTML ="Veri Politikası";
aN4.innerHTML ="Şartlar";
aN5.innerHTML ="Çerez Politikası";
