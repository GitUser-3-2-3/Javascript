import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {MenuComponent} from "./menu/menu.component";
import {AboutComponent} from "./about/about.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FirstComponent, MenuComponent, AboutComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
//  title = 'AngularCrashCourse';
}
