import { Component } from '@angular/core';
import { UserCardComponent } from './user-card/user-card';
import { TaskListComponent } from './task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent, TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'My First Angular App';
}
