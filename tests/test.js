var login = require('../steps/login_steps.js');
var search = require('../steps/search_steps.js');
var profile = require('../steps/profile_steps.js');
var email = require('../steps/email_steps.js');
var random = require('../utils/random.js');

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
        var emailAddress = random.getValidEmailAddress();
        email.submitEmailAddress(client, emailAddress);
        email.verifyEmailAddedNotificationIsDisplayed(client, emailAddress);
        client.end();
    }
}