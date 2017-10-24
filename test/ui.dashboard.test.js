//Description: test file for ui of Horoscope page
// Date               Author                      Comment
// 25/09/2017         Thi Nguyen                  Create new class
////////////////////////////////////////////////////////////////////
load("/common/common.js")

// Start testing
grouped(["ui","dashboard","smoke"],function(){
	test("UI testing for Dashboard Page", function (driver) {
	
	var driver = session.get("driver");
    // Login as Test User -- Precondition
	var dashboardPage = loginAsTestUser(driver);
	dashboardPage.waitForIt();
	GalenPages.sleep(3000);
	// Check layout of dashboard page
    checkLayout(driver, "specs/dashboard/dashboard.gspec", ["all", "desktop"]);  
	});
});