import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header";
import {UsersComponent} from "./users/users";
import {TasksComponent} from "./tasks/tasks";


@Component({
  selector: 'app-root',
    imports: [

        HeaderComponent,
        UsersComponent,
        TasksComponent
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
