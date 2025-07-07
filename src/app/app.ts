import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header";
import {UsersComponent} from "./users/users";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-root',
    imports: [

        HeaderComponent,
        UsersComponent,
        RouterOutlet
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
