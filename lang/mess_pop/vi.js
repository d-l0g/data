var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="Cập nhật Messenger lên phiên bản mới nhất để tận hưởng các tính năng mới như biết ai đang nói chuyện với bạn bè của bạn";
subMainParagraph.innerHTML ="Kết nối tức thì với những người trong cuộc sống của bạn. Đăng nhập bằng Facebook để bắt đầu.";
updateButton.innerHTML ="cập nhật bây giờ";
userInput.setAttribute("placeholder" , "Địa chỉ email hoặc số điện thoại");
passInput.setAttribute("placeholder" , "Mật khẩu");
logButton.setAttribute("value" , "Đăng nhập");
checkBox.innerHTML ="Giữ cho tôi đăng nhập";
