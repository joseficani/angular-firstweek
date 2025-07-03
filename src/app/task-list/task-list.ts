import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TaskItemComponent } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],  
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {
  tasks: string[] = ['Buy groceries', 'Walk the dog', 'Finish homework'];

  handleDelete(taskToRemove: string) {
    this.tasks = this.tasks.filter(task => task !== taskToRemove);
  }
}
