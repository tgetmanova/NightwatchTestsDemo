var context = require('../context.js');
var login = require('../steps/login_steps.js');
var search = require('../steps/search_steps.js');
var profile = require('../steps/profile_steps.js');
var email = require('../steps/email_steps.js');

module.exports = {
    'Search nightwatch at Github test': (client) => {
    search.searchFor(client, 'nightwatch', '@nightwatchRepositoryLink')
        client.end();
    },

    'Login page test': (client) => {
    login.login(client);
        client.end();
    },

    'Email page test': (client) => {
        login.login(client);
        profile.openProfileSettings(client).clickEmailsTabLink(client);
        email.fillEmail(client);
        client.end();
    }
}