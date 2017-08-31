module.exports = {
    getRandomElement: function () {
        return arguments[Math.floor(Math.random() * arguments.length)];
    },

    getRandomAlphanumeric: function (length) {
        var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split("");
        var randomString = "";
        for (i = 0; i < length; i++) {
            randomString += this.getRandomElement.apply(this, alphabet);
        }
        return randomString;
    }
}