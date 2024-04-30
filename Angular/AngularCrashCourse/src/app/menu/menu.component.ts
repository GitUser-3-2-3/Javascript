import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(
      private router: Router
  ) {
  }

  navigateToAbout() {
    this.router.navigate(['about']).then(() => {
      console.log("About loaded")
    })
  }

  navigateToHome() {
    this.router.navigate(['home']).then(() => true)
  }
}
