module.exports = {
    elements: {
        replyTitleTextField: 'input[id=\"saved-reply-title-field\"]',
        replyBodyTextArea: 'textArea[id=\"comment_body_1\"]',
        addReplyButton: {
            locateStrategy: 'xpath',
            selector: '//button[contains(text(), \'Add saved reply\')]'
        }
    }
}