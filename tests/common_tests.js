const login = require('../steps/login_steps.js');
const search = require('../steps/search_steps.js');

module.exports = {
    'Search nightwatch at Github test': client => {
        search.searchFor(client, 'nightwatch', '@nightwatchRepositoryLink')
    },

    'Login page test': client => {
        login.login(client);
    },

    after: function (client) {
        client.end();
    }
}