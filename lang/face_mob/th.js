var logAlert = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");


logAlert.innerHTML ="คุณต้องเข้าสู่ระบบก่อน";
userInput.setAttribute("placeholder" , "ที่อยู่อีเมลหรือหมายเลขโทรศัพท์มือถือ");
passInput.setAttribute("placeholder" , "รหัสผ่าน");
logButton.setAttribute("value" , "เข้าสู่ระบบ");
or.innerHTML ="หรือ";
createButton.innerHTML ="สร้างบัญชีใหม่";
