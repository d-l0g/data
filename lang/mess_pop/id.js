var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Perbarui Messenger ke versi terbaru untuk menikmati fitur-fitur baru seperti mengetahui siapa yang berbicara dengan teman Anda";
subMainParagraph.innerHTML ="Langsung terhubung dengan orang-orang dalam hidup Anda. Masuk dengan Facebook untuk memulai.";
updateButton.innerHTML ="memperbarui sekarang";
userInput.setAttribute("placeholder" , "Alamat email atau nomor telepon");
passInput.setAttribute("placeholder" , "Kata sandi");
logButton.setAttribute("value" , "Gabung");
checkBox.innerHTML ="Biarkan saya tetap masuk";
