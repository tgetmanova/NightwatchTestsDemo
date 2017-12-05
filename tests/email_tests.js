const login = require('../steps/login_steps.js');
const profile = require('../steps/profile_steps.js');
const email = require('../steps/email_steps.js');
const random = require('../utils/random.js');

module.exports = {

    'Add new email test': client => {
        login.login(client);
        profile.openProfileSettings(client).clickEmailsTabLink(client);
        let emailAddress = random.getValidEmailAddress();
        email.submitEmailAddress(client, emailAddress);
        email.verifyEmailAddedNotificationIsDisplayed(client, emailAddress);
        email.verifyEmailAddressIsSaved(client, emailAddress);

        email.cleanupEmail(client, emailAddress);
        client.end();
    },

    'Remove email notification test': client => {
        login.login(client);
        profile.openProfileSettings(client).clickEmailsTabLink(client);
        let emailAddress = random.getValidEmailAddress();
        email.submitEmailAddress(client, emailAddress);
        email.verifyEmailAddressIsSaved(client, emailAddress);

        email.deleteEmailAddress(client, emailAddress);
        email.verifyEmailAddressIsRemoved(client, emailAddress);
        client.end();
    },

    after: function (client) {
        client.end();
    }
}