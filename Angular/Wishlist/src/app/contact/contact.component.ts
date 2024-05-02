import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
            [Validators.required, Validators.email]
        ),
        senderMessage: new FormControl('',
            [Validators.required, Validators.minLength(30)]
        )
    })

    submitForm() {
        console.log(this.contactForm.valid);
    }
}
