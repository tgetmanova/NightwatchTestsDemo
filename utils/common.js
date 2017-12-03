module.exports = {
    formatStringTemplate: function (template, args) {
        for (let key in args) {
            template = template.replace('{' + key + '}', args[key]);
        }
        return template;
    }
}