import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {WishItem} from "../../shared/models/wishItem";

@Component({
    selector: 'app-wish-list',
    standalone: true,
    imports: [
        NgIf,
        NgForOf
    ],
    templateUrl: './wish-list.component.html',
    styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit{

    @Input() wishes: WishItem[] = [];
    constructor() {
    }

    ngOnInit(): void {
    }

    toggleItem(item: WishItem) {
        item.isComplete = !item.isComplete;
        console.log(item);
    }
}
