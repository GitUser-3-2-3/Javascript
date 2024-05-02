import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {WishModule} from "./wish/wish.module";
import {ContactModule} from "./contact/contact.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        WishModule,
        ContactModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}