import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {Task} from "./task/task";
import {ScrollPanel} from "primeng/scrollpanel";


@Component({
  selector: 'app-tasks',
  imports: [
    Button,
    Task,
    ScrollPanel
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class TasksComponent {

}
