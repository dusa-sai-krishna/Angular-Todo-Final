import {Component, computed, inject, input} from '@angular/core';
import {Button} from "primeng/button";
import {RouterLink, RouterOutlet} from "@angular/router";
import {UserService} from "../users/user.service";


@Component({
  selector: 'app-tasks-container',
  imports: [
    Button,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './tasks.container.html',
  styleUrl: './tasks.container.css'
})
export class TasksContainerComponent {
userId = input<string>();
private _userService = inject(UserService);
user = computed(()=>{
 return this._userService.users().find(user=>user.id===this.userId());
})


}
