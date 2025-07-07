import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header";
import {UsersComponent} from "./users/users";


@Component({
  selector: 'app-root',
  imports: [

    HeaderComponent,
    UsersComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
