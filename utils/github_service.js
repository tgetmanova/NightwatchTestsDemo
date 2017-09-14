var context = require('../context.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {
    getEmails: function () {
        var request = new XMLHttpRequest();
        request.open("GET", "https://api.github.com/user/emails", false, context.userLogin, context.userPassword);
        request.send();
        return request;
    }
}