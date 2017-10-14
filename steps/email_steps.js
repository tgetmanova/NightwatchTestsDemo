var random = require('../utils/random.js')
var githubService = require('../utils/github_service');
const assert = require('assert');

module.exports = {
    submitRandomEmailAddress: function (client) {
        this.submitEmailAddress(client, random.getValidEmailAddress());
    },

    submitEmailAddress: function (client, email) {
        var emailPage = client.page.emails();

        emailPage
            .waitForElementVisible('@addEmailTextField', 3000)
            .setValue('@addEmailTextField', email)
            .click('@addEmailButton');
    },

    verifyEmailAddedNotificationIsDisplayed: function (client, emailAddress) {
        let emailPage = client.page.emails();
        let expectedNotificationMessage = 'We sent a verification email to ' + emailAddress
            + '. Please follow the instructions in it.';

        emailPage
            .waitForElementVisible('#js-flash-container', 3000);
        client.assert.containsText('#js-flash-container', expectedNotificationMessage);
    },

    verifyEmailAddressIsInTheList: function (client, emailAddress) {
        let emails = githubService.getEmails().map(i => i.email);
        console.log(emails.join(';'));
        console.log('*******' + emailAddress)
        assert.equal(true, emails.indexOf(emailAddress) !== -1,
            "Failed to retrieve newly created email address from Github service");
    }
}