var mainParagraph = document.querySelector(".description");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 

var aN1 = document.querySelector(".footer a:nth-child(1)");
var aN2 = document.querySelector(".footer a:nth-child(2)");
var aN3 = document.querySelector(".footer a:nth-child(3)");
var aN4 = document.querySelector(".footer a:nth-child(4)");
var aN5 = document.querySelector(".footer a:nth-child(5)");

mainParagraph.innerHTML =`เชื่อมต่อกับคนที่คุณชื่นชอบ<br>ลงชื่อเข้าใช้ Facebook เพื่อเริ่มต้น`;
userInput.setAttribute("placeholder" , "ที่อยู่อีเมลหรือหมายเลขโทรศัพท์มือถือ");
passInput.setAttribute("placeholder" , "รหัสผ่าน");
logButton.innerHTML ="เข้าสู่ระบบ";
aN1.innerHTML ="ไม่ได้ใช้งาน Facebook?";
aN2.innerHTML ="ลืมรหัสผ่าน?";
aN3.innerHTML ="นโยบายข้อมูล";
aN4.innerHTML ="เงื่อนไข";
aN5.innerHTML ="นโยบายคุกกี้";
