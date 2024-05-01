import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass} from "@angular/common";
import events from './../../shared/services/EventService';
import {WishItem} from "../../shared/models/wishItem";

@Component({
    selector: 'wish-list-item',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './wish-list-item.component.html',
    styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {
    @Input() wish!: WishItem;

    get cssClasses() {
        // return this.fulfilled ? ['strikeout', 'text-muted'] : '';
        return {
            'strikeout text-muted': this.wish.isComplete
        }
    }

    constructor() {
    }

    ngOnInit() {
        // does something
    }

    toggleFulfilled() {
        this.wish.isComplete = !this.wish.isComplete;
    }

    removeWish() {
        events.emit('removeWish', this.wish);
    }
}
