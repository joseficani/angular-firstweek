import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItemComponent {
  @Input() task: string = '';
  @Output() delete = new EventEmitter<string>();

  deleteTask() {
    this.delete.emit(this.task);
  }
}
