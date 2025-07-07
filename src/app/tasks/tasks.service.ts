import { Injectable, signal} from '@angular/core';
import {Task} from "./task.model";
import {NewTask} from "./new-task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks = signal<Task[]>([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
          'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
          'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);

  allTasks = this._tasks.asReadonly();

  addTask(newTask:NewTask){
    this._tasks.update(oldTasks=>{
      let task:Task = {
        id: new Date().toDateString(),
        userId: newTask.userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate:newTask.dueDate
      }
      return [...oldTasks, task];
    })
  }

  removeTask(taskId: string | undefined){
    this._tasks.update(oldTasks=>{
     return  oldTasks.filter(task=>task.id!==taskId)
    })
  }



}
