import { Component } from '@angular/core';
import {Avatar} from "primeng/avatar";

@Component({
  selector: 'app-user',
  imports: [
    Avatar
  ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  isSelected=false;

  onSelect(){
    this.isSelected=true;
  }

}
