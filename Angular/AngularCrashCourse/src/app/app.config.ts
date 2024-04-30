import {ApplicationConfig} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {provideClientHydration} from '@angular/platform-browser';
import {FirstService} from "./services/first.service";
import {FirstComponent} from "./first/first.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
    {
        path: 'home',
        component: FirstComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'about/:username',
        component: AboutComponent
    }
]

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideClientHydration(), FirstService]
};
