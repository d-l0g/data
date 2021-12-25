var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Terhubung dengan orang-orang favorit Anda.<br>Masuk dengan Facebook untuk memulai.`;
userInput.setAttribute("placeholder" , "Alamat email atau nomor ponsel");
passInput.setAttribute("placeholder" , "kata sandi");
logButton.innerHTML ="Gabung";
aN1.innerHTML ="Tidak di Facebook?";
aN2.innerHTML ="Tidak ingat kata sandi?";
aN3.innerHTML ="Kebijakan Data";
aN4.innerHTML ="Ketentuan";
aN5.innerHTML ="Kebijakan Cookie";
