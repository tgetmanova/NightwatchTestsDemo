let random = require('../utils/random.js')
let githubService = require('../utils/github_service');
let commonUtils = require('../utils/common');
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
            console.log("Email Address expected to be added: " + emailAddress);
            assert.equal(true, emails.indexOf(emailAddress) !== -1,
                "Failed to retrieve newly created email address from Github service");
        });
    },

    verifyEmailAddressIsRemoved: function (client, emailAddress) {
        client.page.custom_command().queuedCommand(function () {
            let emails = githubService.getEmails().map(i => i.email);
            console.log("Emails list: " + emails.join(';'));
            console.log("Email Address expected to be removed: " + emailAddress);
            assert.equal(true, emails.indexOf(emailAddress) === -1,
                "Removed email address is still returned from Github service");
        });
    },

    createEmail: function (client, emailToCreate) {
        githubService.createEmail(emailToCreate);
    },

    cleanupEmail: function (client, emailToDelete) {
        client.page.custom_command().queuedCommand(function () {
            githubService.deleteEmail(emailToDelete);
        });
    },

    deleteEmailAddress: function (client, emailToDelete) {
        let emailPage = client.page.emails();

        emailPage.waitForElementVisible('@emailsList', 3000);

        return client
            .useXpath()
            .elements('xpath', emailPage.elements.emailsList['selector'], (result) => {
                let emailsIndexes = [];
                for (i = 1; i <= result.value.length; i++) {
                    emailsIndexes.push(i);
                }
                emailsIndexes.forEach((currentEmailIndex) => {
                    client.getText('css selector', commonUtils.formatStringTemplate(
                        emailPage.props.emailSpanItemTemplate.toString(), {index: currentEmailIndex.toString()}),
                        (result) => {
                            if (result.value.includes(emailToDelete)) {
                                client.click('css selector', commonUtils.formatStringTemplate(
                                    emailPage.props.emailRemoveButtonTemplate.toString(),
                                    {index: currentEmailIndex.toString()}))
                                    .acceptAlert();
                            }
                        })
                })
            });
    }
}