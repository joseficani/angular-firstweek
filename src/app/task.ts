// import { Injectable } from '@angular/core';

// export interface TaskModel {
//   text: string;
//   done: boolean;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//   tasks: TaskModel[] = [
//     { text: 'Buy groceries', done: false },
//     { text: 'Walk the dog', done: false },
//     { text: 'Finish homework', done: false }
//   ];

//   getTask(index: number): TaskModel | undefined {
//     return this.tasks[index];
//   }
// //   getTask(index: number): Task | null {
// //   return this.tasks[index] ?? null;
// // }


//   deleteTask(index: number): void {
//     this.tasks.splice(index, 1);
//   }

//   toggleTask(index: number): void {
//     const task = this.tasks[index];
//     if (task) task.done = !task.done;
//   }
// }

// import { Injectable } from '@angular/core';

// export interface Task {
//   text: string;
//   done: boolean;
//   createdAt?: Date;  // optional
//   priority?: string; // optional
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//   tasks: Task[] = [
//     { text: 'Buy groceries', done: false },
//     { text: 'Walk the dog', done: false },
//     { text: 'Finish homework', done: false }
//   ];

//   addTask(text: string) {
//     this.tasks.push({ text, done: false });
//   }

//   toggleTask(index: number) {
//     this.tasks[index].done = !this.tasks[index].done;
//   }

//   deleteTask(index: number) {
//     this.tasks.splice(index, 1);
//   }

//   getTask(index: number): Task | null {
//     return this.tasks[index] ?? null;
//   }
// }

import { Injectable } from '@angular/core';

export interface TaskItem {
  text: string;
  done: boolean;
  createdAt?: Date;
  priority?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Task {
  tasks: TaskItem[] = [
    { text: 'Buy groceries', done: false, createdAt: new Date(), priority: 'High' },
    { text: 'Walk the dog', done: false, createdAt: new Date(), priority: 'Medium' },
    { text: 'Finish homework', done: false, createdAt: new Date(), priority: 'Low' }
  ];

  getTask(index: number): TaskItem | null {
    return this.tasks[index] ?? null;
  }

  toggleTask(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  addTask(text: string) {
    this.tasks.push({
      text,
      done: false,
      createdAt: new Date(),
      priority: 'Normal'
    });
  }
}
