//Description: test file for ui of Horoscope page
// Date               Author                      Comment
// 04/08/2017         Thi Nguyen                  Create new class
////////////////////////////////////////////////////////////////////
load("/common/common.js")

// Start testing
grouped(["ui","login","smoke"],function(){
	test("UI testing for Login Page", function (driver) {	
	var driver = session.get("driver");
    checkLayout(driver, "specs/login/login.gspec", ["all", "desktop"]);  
	});
});


