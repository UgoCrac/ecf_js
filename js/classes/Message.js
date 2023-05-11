
export class Message {
    type = "";
    message = "";
    client = "";

    constructor(type, message, client) {
        this.type = type;
        this.message = message;
        this.client = client;
    }
};
