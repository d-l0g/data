var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="อัปเดต Messenger เป็นเวอร์ชันล่าสุดเพื่อเพลิดเพลินกับคุณสมบัติใหม่ เช่น รู้ว่าใครกำลังคุยกับเพื่อนของคุณ";
subMainParagraph.innerHTML ="เชื่อมต่อกับผู้คนในชีวิตของคุณทันที ลงชื่อเข้าใช้ Facebook เพื่อเริ่มต้น";
updateButton.innerHTML ="อัพเดทเดี๋ยวนี้";
userInput.setAttribute("placeholder" , "ที่อยู่อีเมลหรือหมายเลขโทรศัพท์");
passInput.setAttribute("placeholder" , "รหัสผ่าน");
logButton.setAttribute("value" , "เข้าสู่ระบบ");
checkBox.innerHTML ="ให้ฉันลงชื่อเข้าใช้";
