// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; 
// import { TaskItemComponent } from '../task-item/task-item';

// @Component({
//   selector: 'app-task-list',
//   standalone: true,
//   imports: [CommonModule, TaskItemComponent],  
//   templateUrl: './task-list.html',
//   styleUrl: './task-list.css'
// })
// export class TaskListComponent {
//   tasks: string[] = ['Buy groceries', 'Walk the dog', 'Finish homework'];

//   handleDelete(taskToRemove: string) {
//     this.tasks = this.tasks.filter(task => task !== taskToRemove);
//   }
// }
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TaskItemComponent } from '../task-item/task-item';

// @Component({
//   selector: 'app-task-list',
//   standalone: true,
//   imports: [CommonModule, TaskItemComponent],
//   templateUrl: './task-list.html',
//   styleUrl: './task-list.css'
// })
// export class TaskListComponent {
//   tasks: string[] = ['Buy groceries', 'Walk the dog', 'Finish homework'];

//   handleDelete(index: number) {
//     this.tasks.splice(index, 1);
//   }
// }
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from '../task-item/task-item';


interface Task {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskItemComponent], // ✅ ADD FormsModule
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
// export class TaskListComponent {
//   tasks: Task[] = [
//     { text: 'Buy groceries', done: false },
//     { text: 'Walk the dog', done: false },
//     { text: 'Finish homework', done: false }
//   ];

//   newTask = '';

//   addTask() {
//     if (this.newTask.trim()) {
//       this.tasks.push({ text: this.newTask.trim(), done: false });
//       this.newTask = '';
//     }
//   }

//   markDone(index: number) {
//     this.tasks[index].done = !this.tasks[index].done;
//   }

//   handleDelete(index: number) {
//     this.tasks.splice(index, 1);
//   }
// }

export class TaskListComponent {
  tasks: Task[] = [
    { text: 'Buy groceries', done: false },
    { text: 'Walk the dog', done: false },
    { text: 'Finish homework', done: false }
  ];
  newTask: string = '';

  showSuccess = false;
  deletedTaskName = ''; // ✅ Make sure this line is here!

  taskToDeleteIndex: number | null = null;

  constructor(private modalService: NgbModal) {}

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask.trim(), done: false });
      this.newTask = '';
    }
  }

  toggleDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  confirmDelete(content: any, index: number) {
    this.taskToDeleteIndex = index;
    this.modalService.open(content);
  }

  deleteTask() {
    if (this.taskToDeleteIndex !== null) {
      const deletedTask = this.tasks[this.taskToDeleteIndex].text;
      this.tasks.splice(this.taskToDeleteIndex, 1);
      this.taskToDeleteIndex = null;

      this.deletedTaskName = deletedTask;  // ✅ Sets the name of deleted task
      this.showSuccess = true;

      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    }
  }
}
