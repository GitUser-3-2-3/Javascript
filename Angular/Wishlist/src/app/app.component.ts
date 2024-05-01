import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WishItem} from "../shared/models/wishItem";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {WishListComponent} from "./wish-list/wish-list.component";
import {AddWishComponent} from "./add-wish/add-wish.component";
import {WishFilterComponent} from "./wish-filter/wish-filter.component";
import events from './../shared/services/EventService';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NgForOf,
        NgIf,
        FormsModule,
        WishListComponent,
        AddWishComponent,
        WishFilterComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    items: WishItem[] = [
        new WishItem('To learn Angular'),
        new WishItem('Get Coffee', true),
        new WishItem('Find grass that cuts itself')
    ]

    constructor() {
        events.listen('removeWish', (wish: any) => {
            let index = this.items.indexOf(wish)
            this.items.splice(index, 1);
        })
    }

    filter: any;
}
