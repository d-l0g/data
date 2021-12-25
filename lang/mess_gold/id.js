var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger memudahkan dan menyenangkan untuk tetap dekat dengan orang-orang favorit Anda.";
updateButton.innerHTML ="Memperbarui sekarang";
userInput.setAttribute("placeholder" , "Alamat email atau nomor telepon");
passInput.setAttribute("placeholder" , "Kata sandi");
logButton.setAttribute("value" , "Gabung");
