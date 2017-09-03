var context = require('../context.js');

module.exports = {
    confirmActionWithPassword: function (client) {
        var confirmationPage = client.page.confirmation();

        confirmationPage
            .waitForElementVisible('@passwordTextField', 3000)
            .setValue('@passwordTextField', context.userPassword)
            .click('@confirmPasswordButton');
    }
}