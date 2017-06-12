module.exports = {
    url: function () {
        return this.api.launch_url + "/search";
    },
    elements: {
        searchField: 'input[name="q"]',
        resultsHeader: '.flex-justify-between > h3:nth-child(1)',
        nightwatchRepositoryLink: 'a[href="/nightwatchjs/nightwatch"]'
    }
};