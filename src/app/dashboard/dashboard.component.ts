import { Component } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CreateTaskComponent, TaskDetailsComponent, FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showCreateTaskForm: boolean = false;

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }
}
