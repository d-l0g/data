var mainParagraph = document.querySelector(".con-text");
var subMainParagraph = document.querySelector(".log-text");
var updateButton = document.querySelector(".update")
var userInput = document.querySelector(".home-mail");
var passInput = document.querySelector(".home-pass");
var logButton = document.querySelector(".login"); 
var checkBox = document.querySelector(".chbox"); 

mainParagraph.innerHTML ="আপনার বন্ধুদের সাথে কে কথা বলছে তা জানার মতো নতুন বৈশিষ্ট্যগুলি উপভোগ করতে মেসেঞ্জারকে সর্বশেষ সংস্করণে আপডেট করুন৷";
subMainParagraph.innerHTML ="অবিলম্বে আপনার জীবনের মানুষের সাথে সংযোগ. শুরু করতে Facebook দিয়ে সাইন ইন করুন।";
updateButton.innerHTML ="এখন হালনাগাদ করুন";
userInput.setAttribute("placeholder" , "ইমেল ঠিকানা বা ফোন নম্বর");
passInput.setAttribute("placeholder" , "পাসওয়ার্ড");
logButton.setAttribute("value" , "প্রবেশ করুন");
checkBox.innerHTML ="আমার সাইন ইন রাখুন";
