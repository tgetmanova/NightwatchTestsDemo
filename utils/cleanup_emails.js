let github = require("../utils/github_service");

function cleanupEmails() {
    let emails = github.getEmails()
        .filter(i => i.primary === false
            && i.verified === false)
        .map(i => i.email);
    console.log(emails.join(";\n "));
    emails.forEach((i) => github.deleteEmail(i));
}

cleanupEmails();