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

    verifyEmailAddressIsInTheList: function (client, emailAddress) {
        client.page.custom_command().queuedCommand(function () {
            let emails = githubService.getEmails().map(i => i.email);
            console.log("Emails list: " + emails.join(';'));
            console.log("Target email Address: " + emailAddress);
            assert.equal(true, emails.indexOf(emailAddress) !== -1,
                "Failed to retrieve newly created email address from Github service");
        });
    },

    cleanupEmail: function(client, emailToDelete) {
        client.page.custom_command().queuedCommand(function () {
            githubService.deleteEmail(emailToDelete);
        });
    },

    getEmailHardcoded: function (client) {
        console.log("**********  Inside getEmailPosition**** ");
        return client
            .useXpath()
            .waitForElementVisible('//*[@id="settings-emails"]/li[5]/span[1]', 3000)
            .getText("//*[@id=\"settings-emails\"]/li[5]/span[1]", function (result) {
                console.log("********** Inside GetValue Callback, result:   " + result.value);
                return result.value;
            });
    },

    getPositionByEmailAddress: function (client, emailAddress) {
        client
            .useXpath()
            .waitForElementVisible("//*[@id=\"settings-emails\"]/li[1]/span[1]", 3000)
         //   .getAttribute("//span[contains(text(), 'ea137zOc6lInJ2rsCTL5dgjZ65zidS@jCk1Me4NqUAXSPy5goIE.test')]");

        client.elements("xpath", "//*[@id=\"settings-emails\"]/li", function (result) {
            let elements = result.value;
            for (let i in elements){
                console.log("*********" + i);
                client
                    .useXpath()
                    .elementIdText("//*[@id=\"settings-emails\"]/li[" + i + "]/span[1]", function(text){
                    console.log("*********" + text.value);
                });
            }
        });
    },

}