module.exports = {
    url: function () {
        return this.api.launch_url;
    },
    elements: {
        signInLink: 'a[href="/login"]'
    }
};