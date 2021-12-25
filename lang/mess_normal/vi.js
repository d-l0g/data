var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`Kết nối với những người bạn yêu thích. <br> Đăng nhập bằng Facebook để bắt đầu.`;
userInput.setAttribute("placeholder" , "Địa chỉ email hoặc số điện thoại di động");
passInput.setAttribute("placeholder" , "mật khẩu mở khóa");
logButton.innerHTML ="Đăng nhập";
aN1.innerHTML ="Không có trên Facebook?";
aN2.innerHTML ="Quên mật khẩu?";
aN3.innerHTML ="Chính sách dữ liệu";
aN4.innerHTML ="Điều kiện";
aN5.innerHTML ="Chính sách cookie";
