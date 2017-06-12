module.exports = {
    'Search nightwatch at Github test': (client) => {
        const page = client.page.search();

        page.navigate()
            .setValue('@searchField', ['nightwatch', client.Keys.ENTER])
            .waitForElementVisible('@resultsHeader', 5000)
            .assert.containsText('@resultsHeader', 'results')
            .assert.elementPresent('@nightwatchRepositoryLink');

        client.end();
    },

    'Open Github login page test': (client) => {
        const homePage = client.page.home();

        homePage.navigate()
            .click('@signInLink');

        const loginPage = client.page.login();

        loginPage
            .waitForElementVisible('@loginHeader', 5000)
            .assert.urlEquals(loginPage.url());

        client.end();
    }
}