module.exports = {
    url: function () {
        return this.api.launch_url + "/login";
    },
    elements: {
        loginHeader: '#login > form > div.auth-form-header.p-0 > h1'
    }
};