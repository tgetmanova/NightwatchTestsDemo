module.exports = {
    elements: {
        addEmailTextField: 'input[id="email"]',
        addEmailButton: '#new_user_email > dl > dd > button',
        emailsList: {
            locateStrategy: 'xpath',
            selector: '//*[@id="settings-emails"]/li'
        }
    },

    props: {
        emailSpanItemTemplate: '#settings-emails > li:nth-child({index})',
        emailRemoveButtonTemplate: "#settings-emails > li:nth-child({index}) button[class*=\"btn-link settings-remove-email \"]"
    }
}