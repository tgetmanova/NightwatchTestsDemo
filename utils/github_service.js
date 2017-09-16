var context = require('../context.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {
    getEmails: function () {
        var request = new XMLHttpRequest();
        request.open("GET", "https://api.github.com/user/emails", false, context.userLogin, context.userPassword);
        request.send();

        var emailsJson = JSON.parse(request.responseText);

        var emailAddresses = [];
        for (var i = 0; i < emailsJson.length; i++) {
            var item = emailsJson[i];
            var emailAddress = this.initializeEmail(item["email"], item["primary"], item["verified"], item["visibility"]);
            emailAddresses.push(emailAddress);
        }

        return emailAddresses;
    },

    initializeEmail: function (email, primary, verified, visibility) {
        var emailAddress = {};
        emailAddress.email = email;
        emailAddress.primary = primary;
        emailAddress.verified = verified;
        emailAddress.visibility = visibility;
        return emailAddress;
    }
}
