import { Component } from '@angular/core';
import {UserComponent} from "./user/user";


@Component({
  selector: 'app-users',
  imports: [
    UserComponent
  ],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class UsersComponent {

}
