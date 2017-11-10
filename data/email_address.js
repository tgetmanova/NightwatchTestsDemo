module.exports =
    class EmailAddress {
        constructor(email, primary, verified, visibility) {
            this.email = email;
            this.primary = primary;
            this.verified = verified;
            this.visibility = visibility;
        }
    };