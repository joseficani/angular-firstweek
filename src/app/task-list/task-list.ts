// import { Component } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterLink } from '@angular/router';
// import { TaskService } from '../task';  

// @Component({
//   selector: 'app-task-list',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterLink],
//   templateUrl: './task-list.html',
//   styleUrl: './task-list.css'
// })
// export class TaskListComponent {
//   newTask: string = '';

//   showSuccess = false;
//   deletedTaskName = '';

//   taskToDeleteIndex: number | null = null;

//   constructor(
//     private modalService: NgbModal,
//     public taskService: TaskService  
//   ) {}

//   addTask() {
//     if (this.newTask.trim()) {
//       this.taskService.tasks.push({ text: this.newTask.trim(), done: false });
//       this.newTask = '';
//     }
//   }

//   toggleDone(index: number) {
//     this.taskService.toggleTask(index);
//   }

//   confirmDelete(content: any, index: number) {
//     this.taskToDeleteIndex = index;
//     this.modalService.open(content);
//   }

//   deleteTask() {
//     if (this.taskToDeleteIndex !== null) {
//       const deletedTask = this.taskService.tasks[this.taskToDeleteIndex].text;
//       this.taskService.deleteTask(this.taskToDeleteIndex);
//       this.taskToDeleteIndex = null;

//       this.deletedTaskName = deletedTask;
//       this.showSuccess = true;

//       setTimeout(() => {
//         this.showSuccess = false;
//       }, 3000);
//     }
//   }
// }
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Task, TaskItem } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {
  tasks: TaskItem[] = [];
  newTask: string = '';
  showSuccess = false;
  deletedTaskName = '';
  taskToDeleteIndex: number | null = null;

  constructor(public taskService: Task, private modalService: NgbModal) {
    this.tasks = this.taskService.tasks;
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }

  toggleDone(index: number) {
    this.taskService.toggleTask(index);
  }

  confirmDelete(content: any, index: number) {
    this.taskToDeleteIndex = index;
    this.modalService.open(content);
  }

  deleteTask() {
    if (this.taskToDeleteIndex !== null) {
      const deletedTask = this.taskService.tasks[this.taskToDeleteIndex].text;
      this.taskService.deleteTask(this.taskToDeleteIndex);
      this.taskToDeleteIndex = null;

      this.deletedTaskName = deletedTask;
      this.showSuccess = true;

      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    }
  }
}
