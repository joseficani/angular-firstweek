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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ ADD THIS
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
export class TaskListComponent {
  tasks: Task[] = [
    { text: 'Buy groceries', done: false },
    { text: 'Walk the dog', done: false },
    { text: 'Finish homework', done: false }
  ];

  newTask = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask.trim(), done: false });
      this.newTask = '';
    }
  }

  markDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  handleDelete(index: number) {
    this.tasks.splice(index, 1);
  }
}
