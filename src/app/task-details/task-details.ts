// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { TaskService } from '../task'; 

// @Component({
//   selector: 'app-task-details',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './task-details.html',
//   styleUrl: './task-details.css'
// })
// export class TaskDetailsComponent implements OnInit {
//   taskIndex: number = 0;
//   task = { text: '', done: false };

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private taskService: TaskService
//   ) {}

//   ngOnInit(): void {
//     const idParam = this.route.snapshot.paramMap.get('id');
//     this.taskIndex = idParam ? +idParam : -1;

//     const foundTask = this.taskService.getTask(this.taskIndex);
//     if (foundTask) {
//       this.task = foundTask;
//     } else {
//       // If no task found for this index, navigate back
//       this.router.navigate(['/']);
//     }
//   }

//   toggleDone() {
//     this.taskService.toggleTask(this.taskIndex);
//     this.task.done = !this.task.done; // update local copy for view
//   }

//   deleteTask() {
//     this.taskService.deleteTask(this.taskIndex);
//     this.router.navigate(['/']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Task, TaskItem } from '../task';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css'
})
export class TaskDetailsComponent implements OnInit {
  taskIndex: number = 0;
  task: TaskItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: Task
  ) {}

  ngOnInit(): void {
    this.taskIndex = +this.route.snapshot.paramMap.get('id')!;
    this.task = this.taskService.getTask(this.taskIndex);
    if (!this.task) {
      this.router.navigate(['/']);
    }
  }

  toggleDone() {
    if (this.task) {
      this.taskService.toggleTask(this.taskIndex);
      this.task = this.taskService.getTask(this.taskIndex);
    }
  }

  deleteTask() {
    this.taskService.deleteTask(this.taskIndex);
    this.router.navigate(['/']);
  }
}
