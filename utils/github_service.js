let context = require('../context.js');
let XMLHttpRequest = require("../modules/xmlhttprequest").XMLHttpRequest;
let EmailAddress = require('../data/email_address');

module.exports = {
    getEmails: function () {
        let request = new XMLHttpRequest();
        request.open("GET", "https://api.github.com/user/emails", false, context.userLogin, context.userPassword);
        request.send();

        let emailsJson = JSON.parse(request.responseText);

        let emailAddresses = [];
        for (let i = 0; i < emailsJson.length; i++) {
            let item = emailsJson[i];
            let emailAddress = new EmailAddress(item["email"], item["primary"], item["verified"], item["visibility"]);
            emailAddresses.push(emailAddress);
        }

        return emailAddresses;
    }
}
