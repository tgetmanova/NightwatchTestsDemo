var random = require('../utils/random.js')

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
        var emailPage = client.page.emails();
        var expectedNotificationMessage = 'We sent a verification email to ' + emailAddress
            + '. Please follow the instructions in it.';

        emailPage
            .waitForElementVisible('#js-flash-container', 3000);
        client.assert.containsText('#js-flash-container', expectedNotificationMessage);
    }
}