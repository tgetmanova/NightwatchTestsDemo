module.exports = {
        'Search nightwatch at Github test': (client) => {
        const page = client.page.search();

        page.navigate()
            .setValue('@searchField', ['nightwatch', client.Keys.ENTER])
            .waitForElementVisible('@resultsHeader', 5000)
            .assert.containsText('@resultsHeader', 'results')
            .assert.elementPresent('@nightwatchRepositoryLink');

        client.end();
        }
}