import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {WishItem} from "../../shared/models/wishItem";

@Component({
    selector: 'app-add-wish',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './add-wish.component.html',
    styleUrl: './add-wish.component.css'
})
export class AddWishComponent implements OnInit{
    @Output() addWish = new EventEmitter<WishItem>();
    constructor() {
    }

    ngOnInit(): void {
    }

    newWishText: string = '';

    addNewWish() {
        this.addWish.emit(new WishItem(this.newWishText));
        this.newWishText = '';
    }
}
