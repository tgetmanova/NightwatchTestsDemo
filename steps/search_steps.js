module.exports = {
	searchFor: function(client, searchRequest, expectedSearchResult){
		var page = client.page.search();

		page.navigate()
			.setValue('@searchField', [searchRequest, client.Keys.ENTER])
			.waitForElementVisible('@resultsHeader', 5000)
			.assert.containsText('@resultsHeader', 'results')
			.assert.elementPresent(expectedSearchResult);
	}
}