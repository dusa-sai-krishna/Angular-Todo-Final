import { Component } from '@angular/core';
import {Avatar} from "primeng/avatar";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-user',
  imports: [
    Avatar,
    NgClass
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
