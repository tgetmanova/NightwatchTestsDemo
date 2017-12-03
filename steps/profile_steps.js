module.exports = {
    openProfileSettings: function (client) {
        var topPane = client.page.top_pane();
        topPane
            .click('@profileDropDownLink')
            .click('@settingsLink')

        return this;
    },

    clickEmailsTabLink: function (client) {
        var profileSettingsPage = client.page.profile_settings();
        profileSettingsPage.click('@emailsLink');
    },

    clickSavedRepliesTabLink: function (client) {
        var profileSettingsPage = client.page.profile_settings();
        profileSettingsPage.click('@repliesLink');
    }
}