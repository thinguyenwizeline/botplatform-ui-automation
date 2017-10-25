//Description: test file for ui of Horoscope page
// Date               Author                      Comment
// 25/10/2017         Thi Nguyen                  Create new class
////////////////////////////////////////////////////////////////////
load("/common/common.js")
// Start testing
grouped(["ui","createBot","smoke"],function(){
	test("UI testing for Dashboard Page", function (driver) {
	
	var driver = session.get("driver");
    // Login as Test User -- Precondition
	var dashboardPage = loginAsTestUser(driver);
	dashboardPage.waitForIt();
	GalenPages.sleep(3000);
	dashboardPage.clickCreateBot();
	// Check layout of dashboard page
    //checkLayout(driver, "specs/dashboard/dashboard.gspec", ["all", "desktop"]);  
	});
});