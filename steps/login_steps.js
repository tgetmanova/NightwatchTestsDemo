var context = require('../context.js');

module.exports = {
	 loginWithCredentials: function(client, userLogin, userPassword){
		var homePage = client.page.home();
		var topPane = client.page.top_pane();
		const loginPage = client.page.login();
		
        homePage.navigate();
		
		topPane
			.waitForElementVisible('@paneDiv', 5000)		
		
		client.element('xpath','/html/body/div[1]/header/div/div[1]/button', function(result){
			if(result.status != -1){
				topPane
					.click('@topPaneItemsButton')
					.click('@signInLink');	
			} else{
				topPane
					.click('@signInLink');	
			}
		});

        loginPage
            .waitForElementVisible('@userNameTextField', 5000)
			.setValue('@userNameTextField', userLogin)
			.setValue('@passwordTextField', userPassword)
			.click('@submitButton');
			
		topPane
			.waitForElementVisible('img[alt="@githubTestUser191"]', 5000);
	 },	

	login: function(client){
		this.loginWithCredentials(client, context.userLogin, context.userPassword);
	}
}