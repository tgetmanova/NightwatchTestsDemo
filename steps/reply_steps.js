module.exports = {
    addSavedReply: (client) => {
        var replyPage = client.page.saved_reply();
        replyPage.waitForElementVisible('@replyTitleTextField', 3000)
        replyPage
            .setValue('@replyTitleTextField', 'dsf23')
            .setValue('@replyBodyTextArea', 'asdas2143')
            .click('@addReplyButton')
    }
}