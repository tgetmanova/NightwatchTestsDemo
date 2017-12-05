const login = require('../steps/login_steps.js');
const profile = require('../steps/profile_steps.js');
const reply = require('../steps/reply_steps.js');

module.exports = {
    'Add saved reply test': client => {
        login.login(client);
        profile.openProfileSettings(client).clickSavedRepliesTabLink(client);
        reply.addSavedReply(client);
        client.end();
    },

    after: function (client) {
        client.end();
    }
}