module.exports = {
    elements: {
        passwordTextField: 'input[id = "sudo_password"',
        confirmPasswordButton: {
            locateStrategy: 'xpath',
            selector: "//button[contains(text(), 'Confirm password')]"
        }
    }
}