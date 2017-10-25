this.DashboardPage = $page("Dashboard page",{  
    createBot : "xpath : //button[@class='action-btn sc-bxivhb jTIGHO']",
},{
    clickCreateBot: loggedFunction("Click to Create Bot", function(user){
        this.createBot.click();
        console.log("Click Create Bot");       
    })
});