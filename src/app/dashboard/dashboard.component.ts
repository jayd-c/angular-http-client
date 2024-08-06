import { Component } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../Model/task';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CreateTaskComponent, TaskDetailsComponent, FormsModule,CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showCreateTaskForm: boolean = false;

  constructor(private http: HttpClient) {}
  

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  createTask(data: Task) {
    const headers = new HttpHeaders({'my-headers':'hello-world!'})
    this.http.post('http://localhost:8080/api',data, {headers:headers})
    .subscribe((response)=> {
      console.log(response)
    })
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }
}
