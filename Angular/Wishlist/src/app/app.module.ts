import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {WishListComponent} from "./wish-list/wish-list.component";
import {AddWishComponent} from "./add-wish/add-wish.component";
import {WishFilterComponent} from "./wish-filter/wish-filter.component";
import {WishListItemComponent} from "./wish-list-item/wish-list-item.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        WishListComponent,
        AddWishComponent,
        WishFilterComponent,
        WishListItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}