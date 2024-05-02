import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {createInvalidDomainValidator} from "./invalidEmailDomain";

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'yahoo.com', 'hotmail.com']);

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

    contactForm = new FormGroup({
        senderName: new FormControl('', Validators.required),
        senderEmail: new FormControl('',
            [Validators.required, Validators.email, invalidEmailDomain]
        ),
        senderMessage: new FormControl('',
            [Validators.required, Validators.minLength(30)]
        )
    })

    submitForm() {
        console.log(this.contactForm.valid);
    }
}
