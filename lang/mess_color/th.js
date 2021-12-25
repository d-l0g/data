var mainParagraph = document.querySelector(".main-paragraph");
var updateButton = document.querySelector(".toggle-btn");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".log"); 

mainParagraph.innerHTML ="Messenger ทำให้การอยู่ใกล้ชิดกับคนโปรดเป็นเรื่องง่ายและสนุก";
updateButton.innerHTML ="อัพเดทตอนนี้";
userInput.setAttribute("placeholder" , "ที่อยู่อีเมลหรือหมายเลขโทรศัพท์");
passInput.setAttribute("placeholder" , "รหัสผ่าน");
logButton.setAttribute("value" , "เข้าสู่ระบบ");
