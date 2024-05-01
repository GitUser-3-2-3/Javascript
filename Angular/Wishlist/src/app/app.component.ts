import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WishItem} from "../shared/models/wishItem";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgForOf, NgIf, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    items: WishItem[] = [
        new WishItem('To learn Angular'),
        new WishItem('Get Coffee', true),
        new WishItem('Find grass that cuts itself')
    ]

    listFilter: String = '0';
    newWishText: string = '';
    title: string = 'Wishlist';

    get visibleItems(): WishItem[] {
        let value = this.listFilter;

        if (value === '0') {
            return this.items;
        } else if (value === '1') {
            return this.items.filter(
                item => !item.isComplete
            );
        } else {
            return this.items.filter(
                item => item.isComplete
            );
        }
    }

    addNewWish() {
        // 1. add wish to the items array
        // 2. clear the input
        this.items.push(new WishItem(this.newWishText));
        this.newWishText = '';
    }

    toggleItem(item: WishItem) {
        item.isComplete = !item.isComplete;
        console.log(item);
    }
}
