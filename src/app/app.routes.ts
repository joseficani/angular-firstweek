import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list';
import { TaskDetailsComponent } from './task-details/task-details';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task/:id', component: TaskDetailsComponent },
  { path: '**', redirectTo: '' }  
];
