module.exports = class SavedReply {

    withTitle(title) {
        this.title = title;
        return this;
    }

    withContent(content) {
        this.content = content;
        return this;
    }

    withInItalic(inItalic) {
        this.inItalic = inItalic;
        return this;
    }

    withInBold(inBold) {
        this.isBold = inBold;
        return this;
    }
}