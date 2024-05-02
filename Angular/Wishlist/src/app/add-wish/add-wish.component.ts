import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WishItem} from "../../shared/models/wishItem";

@Component({
    selector: 'app-add-wish',
    templateUrl: './add-wish.component.html',
    styleUrl: './add-wish.component.css'
})
export class AddWishComponent implements OnInit {
    @Output() addWish = new EventEmitter<WishItem>();

    constructor() {
    }

    ngOnInit(): void {
        // does something
    }

    newWishText: string = '';

    addNewWish() {
        this.addWish.emit(new WishItem(this.newWishText));
        this.newWishText = '';
    }
}
