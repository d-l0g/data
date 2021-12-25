var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger giúp bạn ở gần những người bạn yêu thích thật dễ dàng và thú vị.";
updateButton.innerHTML ="Cập nhật bây giờ";
userInput.setAttribute("placeholder" , "Địa chỉ email hoặc số điện thoại");
passInput.setAttribute("placeholder" , "Mật khẩu");
logButton.setAttribute("value" , "Đăng nhập");
