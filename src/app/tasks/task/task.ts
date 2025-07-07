import {Component, inject, input} from '@angular/core';
import {Button} from "primeng/button";
import {Task} from "../task.model";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  imports: [
    Button,
    DatePipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class TaskComponent {
 task = input<Task>();
private _taskService = inject(TasksService)

  onComplete() {
    this._taskService.removeTask(this.task()?.id)
  }
}
