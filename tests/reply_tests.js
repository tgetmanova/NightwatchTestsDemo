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

    afterEach: function (client, done) {
        client.end(function() {
            console.log(`Test "${client.currentTest.name}" completed`);
            done();
        });
    }
}