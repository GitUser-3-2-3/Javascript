import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AddWishComponent} from "./add-wish/add-wish.component";
import {WishFilterComponent} from "./wish-filter/wish-filter.component";
import {WishListItemComponent} from "./wish-list-item/wish-list-item.component";
import {WishListComponent} from "./wish-list/wish-list.component";
import {WishComponent} from "./wish.component";

@NgModule({
    declarations: [
        WishListComponent,
        AddWishComponent,
        WishFilterComponent,
        WishListItemComponent,
        WishComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        WishComponent
    ]
})
export class WishModule {
}
