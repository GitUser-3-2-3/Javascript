import {Injectable} from '@angular/core';

@Injectable()
export class FirstService {

    messages: Array<any> = []

    constructor() {
        this.init();
    }

    init(): void {
        this.insert({
            name: "Parth",
            email: "parth@gmail.com",
            message: "New code",
        })
        this.insert({
            name: "steve",
            email: "steve@gmail.com",
            message: "New"
        })
        this.insert({
            name: "john",
            email: "john@gmail.com",
            message: "N code",
        })
    }

    insert(message: {
        name: string, email: string, message: string
    }): void {
        this.messages.push(message);
    }

    getAllMessages() {
        return this.messages;
    }

    deleteMessage(index: number) {
        this.messages.splice(index, 1);
    }
}
