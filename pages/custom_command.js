module.exports = {
    elements: {},
    commands: [
        {
            queuedCommand: function (func) {
                this.api.perform(func.bind(this));
            }
        }
    ]
};