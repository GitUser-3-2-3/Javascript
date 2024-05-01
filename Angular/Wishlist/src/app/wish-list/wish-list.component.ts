import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {WishItem} from "../../shared/models/wishItem";
import {WishListItemComponent} from "../wish-list-item/wish-list-item.component";

@Component({
    selector: 'app-wish-list',
    standalone: true,
    imports: [
        NgIf,
        NgForOf,
        WishListItemComponent
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
}
