import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list';
import { TaskDetailsComponent } from './task-details/task-details';
import { UserForm } from './user-form/user-form';


// export const routes: Routes = [
//   { path: '', component: TaskListComponent },
//   { path: 'task/:id', component: TaskDetailsComponent },
//   { path: '**', redirectTo: '' }  
// ];

export const routes: Routes = [
  { path: '', component: UserForm },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent }
];
