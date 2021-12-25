var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");


logAlert.innerHTML ="Bạn cần phải đăng nhập đầu tiên.";
userInput.setAttribute("placeholder" , "Địa chỉ email hoặc số điện thoại di động");
passInput.setAttribute("placeholder" , "Mật khẩu");
logButton.setAttribute("value" , "Đăng nhập");
or.innerHTML ="hoặc";
createButton.innerHTML ="Tạo tài khoản mới";
