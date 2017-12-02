let random = require('../utils/random.js')
let githubService = require('../utils/github_service');
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

    verifyEmailAddressIsSaved: function (client, emailAddress) {
        client.page.custom_command().queuedCommand(function () {
            let emails = githubService.getEmails().map(i => i.email);
            console.log("Emails list: " + emails.join(';'));
            console.log("Target email Address: " + emailAddress);
            assert.equal(true, emails.indexOf(emailAddress) !== -1,
                "Failed to retrieve newly created email address from Github service");
        });
    },

    cleanupEmail: function (client, emailToDelete) {
        client.page.custom_command().queuedCommand(function () {
            githubService.deleteEmail(emailToDelete);
        });
    },

    deleteEmailAddress: function (client, emailToDelete) {
        return client
            .useXpath()
            .waitForElementVisible('//*[@id="settings-emails"]/li', 3000)
            .elements('xpath', '//*[@id="settings-emails"]/li', function (result) {
                for (i = 1; i <= result.value.length; i++) {
                    client.getText('css selector', `#settings-emails > li:nth-child(${i})`, function (result1) {
                        if (result1.value.includes(emailToDelete)) {
                            client.element('css selector',
                                `#settings-emails > li:nth-child(${i}) button[class*="btn-link settings-remove-email "]`);
                        }
                    })
                }
            });
    }
}