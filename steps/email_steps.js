var random = require('../utils/random.js')

module.exports = {
    fillEmail: function (client) {
        var emailPage = client.page.emails();

        emailPage
            .waitForElementVisible('@addEmailTextField', 3000)
            .setValue('@addEmailTextField', random.getRandomAlphanumeric(25));
    }
}