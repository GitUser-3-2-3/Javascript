import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MessageDetailsComponent} from "../message-details/message-details.component";
import {FirstService} from "../services/first.service";

@Component({
    selector: 'app-first',
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        NgForOf,
        MessageDetailsComponent
    ],
    templateUrl: './first.component.html',
    styleUrl: './first.component.scss'
})
export class FirstComponent {
    name: string = '';
    email: string = '';
    message: string = '';
    isSubmitted: boolean = false;
    messages: Array<any> = [];

    constructor(
        private service: FirstService
    ) {
        this.messages = this.service.getAllMessages();
        this.isSubmitted = this.messages.length > 0;
    }

    onSubmit() {
        this.isSubmitted = true;

        this.service.insert({
            'name': this.name,
            'email': this.email,
            'message': this.message
        });

        console.log(this.messages)
    }

    deleteMessage(index: number) {
        this.service.deleteMessage(index);
    }
}
