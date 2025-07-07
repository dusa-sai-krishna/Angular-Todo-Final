import {Routes} from '@angular/router';
import {TasksContainerComponent} from "./tasks/tasks.container.";
import {NoTasksComponent} from "./tasks/no-tasks/no-tasks";
import {NewTaskComponent} from "./tasks/new-task/new-task";
import {TasksComponent} from "./tasks/tasks/tasks.component";

export const routes: Routes = [
    {
        path: '',
        component: NoTasksComponent,
    },
    {
        path: "users/:userId",
        component: TasksContainerComponent,
        children: [
            {
                path:"tasks",
                component: TasksComponent,
            },
            {
                path:"tasks/new",
                component: NewTaskComponent
            }
        ]
    },
    {
        path: "**",
        redirectTo: "/"
    }
];
