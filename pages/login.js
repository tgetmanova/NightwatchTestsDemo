module.exports = {
    url: function () {
        return this.api.launch_url + "/login";
    },
    elements: {
        userNameTextField : 'input[id="login_field"]',
		passwordTextField : 'input[id="password"]',
		submitButton : 'input[name="commit"]'
    }
};