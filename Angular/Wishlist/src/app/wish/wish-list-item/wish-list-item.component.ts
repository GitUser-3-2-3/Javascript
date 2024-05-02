import {Component, Input, OnInit} from '@angular/core';
import {WishItem} from "../../../shared/models/wishItem";
import {EventService} from "../../../shared/services/EventService";

@Component({
    selector: 'wish-list-item',
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

    constructor(
        private events: EventService
    ) {
    }

    ngOnInit() {
        // does something
    }

    toggleFulfilled() {
        this.wish.isComplete = !this.wish.isComplete;
    }

    removeWish() {
        this.events.emit('removeWish', this.wish);
    }
}
