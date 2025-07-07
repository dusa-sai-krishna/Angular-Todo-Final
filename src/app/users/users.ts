import {Component, inject} from '@angular/core';
import {UserComponent} from "./user/user";
import {UserService} from "./user.service";


@Component({
  selector: 'app-users',
  imports: [
    UserComponent
  ],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class UsersComponent {
private userService = inject(UserService);
users = this.userService.users;
}
