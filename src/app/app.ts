// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { UserCardComponent } from './user-card/user-card';
// import { TaskListComponent } from './task-list/task-list';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [UserCardComponent, TaskListComponent,RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   title = 'My First Angular App';
// }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
