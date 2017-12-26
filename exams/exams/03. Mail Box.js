class MailBox {
    constructor() {
        this.messages = [];
        this._messageCount = 0;
    }

    get messageCount() {
        return this.messages.length;
    }

    addMessage(subject, text) {
        if (typeof subject === "string" && typeof text === "string") {
            this.messages.push({subject: subject, text: text});
        }
        return this;
    }

    deleteAllMessages() {
        this.messages = [];
    }

    findBySubject(substr) {
        let haveIt = [];
        for (let mail of this.messages) {
            if (mail['subject'].indexOf(substr) > -1)
                haveIt.push(mail);
        }
        return haveIt;
    }

    toString() {
        let counter = 0;
        if (this.messages.length == 0) {
            return ' * (empty mailbox)';
        } else {
            let output = '';
            for (let mail of this.messages) {
                counter++;
                if (counter == 1)
                    output += ` * [${mail['subject']}] ${mail['text']}`;
                else
                    output += `\n * [${mail['subject']}] ${mail['text']}`;
            }
            return output;
        }
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
