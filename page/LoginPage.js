
this.LoginPage  = $page("Login page", {
    email : "xpath : //input[@name='username']",
    password : "xpath : //input[@name='password']",
    loginButton :"xpath : //button[@class= 'auth0-lock-submit']"
    },{
        loginAsTestUser: loggedFunction("Login as user ${_1.email} and password ${_1.password}", function(user){
            this.email.typeText(user.email);
            console.log("Type "+user.email+"");
            GalenPages.sleep(3000);
            this.password.typeText(user.password);
            console.log("Type "+user.password+"");
            GalenPages.sleep(3000);
            this.loginButton.click();
            console.log("Click button log in");
            
        })
});