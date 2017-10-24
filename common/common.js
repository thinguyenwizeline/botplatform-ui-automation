load("/page/LoginPage.js");
load("/page/DashboardPage.js");

var TEST_USER = {
    email: "qa-bots@wizeline.com",
    password: "Wizeline!"
};

beforeTest(function() {
    var driver = createDriver("https://bot-cms-dev.firebaseapp.com/", "1400x900", "chrome");
    session.put("driver",driver);
            
});

afterTest(function() 
{
    var driver = session.get("driver");
    driver.quit();
});

(function (export) {
    export.TEST_USER = TEST_USER;
})(this);

function loginAsTestUser(driver) {
    var loginPage = new LoginPage(driver);
    GalenPages.sleep(3000);
    console.log("Login");      
    loginPage.loginAsTestUser(TEST_USER);
    GalenPages.sleep(3000);

    return new DashboardPage(driver).waitForIt();
}
