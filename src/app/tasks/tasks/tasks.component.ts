import {Component, computed, effect, inject, input} from '@angular/core';
import {ScrollPanel} from "primeng/scrollpanel";
import { TaskComponent} from "../task/task";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-tasks',
  imports: [
    ScrollPanel,
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userId = input<string>();
  private _tasksService = inject(TasksService);
  userTasks = computed(()=>{
    return this._tasksService.allTasks().filter(task=>task.userId===this.userId());
  })


}
