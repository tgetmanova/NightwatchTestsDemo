module.exports = {
	elements: {
		topPaneItemsButton: {
			selector: '/html/body/div[1]/header/div/div[1]/button',
			locateStrategy: 'xpath'
		},
		signInLink : 'a[href="/login"]',
		profileDropDownLink: 'img[alt="@githubTestUser191"]',
		paneDiv : {
			selector: 'a[href="https://github.com/"]',
			locateStrategy: 'css selector'
		},
		settingsLink: 'a[href="/settings/profile"]'
	}
};