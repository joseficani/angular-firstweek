// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-task-item',
//   standalone: true,
//   templateUrl: './task-item.html',
//   styleUrl: './task-item.css'
// })
// export class TaskItemComponent {
//   @Input() task: string = '';
//   @Output() delete = new EventEmitter<string>();

//   deleteTask() {
//     this.delete.emit(this.task);
//   }
// }
// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-task-item',
//   standalone: true,
//   templateUrl: './task-item.html',
//   styleUrl: './task-item.css'
// })
// export class TaskItemComponent {
//   @Input() task: string = '';
//   @Input() index: number = 0;

//   @Output() delete = new EventEmitter<number>();

//   deleteTask() {
//     this.delete.emit(this.index);
//   }
// }
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ ADD THIS

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule], // ✅ ADD THIS
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItemComponent {
  @Input() task: string = '';
  @Input() done: boolean = false;
  @Input() index: number = 0;

  @Output() delete = new EventEmitter<number>();
  @Output() markDone = new EventEmitter<number>();

  deleteTask() {
    this.delete.emit(this.index);
  }

  toggleDone() {
    this.markDone.emit(this.index);
  }
}
