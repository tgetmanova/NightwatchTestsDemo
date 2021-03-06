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
    },

    getValidEmailAddress: function () {
        return this.getRandomAlphanumeric(30) + "@" + this.getRandomAlphanumeric(20) + ".test";
    },

    getRandomBoolean: function(){
        return Math.random() >= 0.5;
    }
}