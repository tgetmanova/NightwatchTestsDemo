var context = require('../context.js');
var login = require('../steps/login_steps.js');
var search = require('../steps/search_steps.js');

module.exports = {
    'Search nightwatch at Github test': (client) => {
		search.searchFor(client, 'nightwatch', '@nightwatchRepositoryLink')
        client.end();
    }, 

    'Login page test': (client) => {
		login.login(client);        
        client.end();
    }
}