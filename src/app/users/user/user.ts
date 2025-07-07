import {Component, input, Input} from '@angular/core';
import {Avatar} from "primeng/avatar";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {User} from "../user.model";

@Component({
  selector: 'app-user',
  imports: [
    Avatar,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  user = input.required<User>();

  get avatarPath(){
    return "users/"+this.user().avatar;
  }

}
