import { Component, OnInit } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../Model/task';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { CreateMySqlTaskComponent } from './create-my-sql-task/create-my-sql-task.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CreateTaskComponent, TaskDetailsComponent, 
    FormsModule,CommonModule, HttpClientModule,
    CreateMySqlTaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  
  showMySqlCreateTaskForm: boolean = false;

  allTasks:Task[] = []

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchAllTasks();
    this.fetchallTasksFromJava();
    this.printAllTasks();
    
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  OpenCreateMySqlTaskForm() {
    this.showMySqlCreateTaskForm = true;
  }
  createTask(data: Task) {
    const headers = new HttpHeaders({'my-headers':'hello-world!'})
    this.http.post('https://angularhttpclient-40ce2-default-rtdb.firebaseio.com/tasks.json',data, {headers:headers})
    .subscribe((response)=> {
      console.log(response)
    })
  }

  private fetchallTasksFromJava () {
    this.http.get("http://localhost:8080/api/tasks")
    .pipe(map((response)=> {
      let tasks = [];
      //Transform data
      for(let key in response) {
        if(response.hasOwnProperty(key)) {
          tasks.push({...response[key], id:key})
          this.allTasks.push(response[key])
        }
      }
      return tasks;
    }))
    .subscribe((tasks)=> {
      console.log(tasks)
    })
  }

  //since nosql databases has key value for storing user data we need to change (transform) it to an array so 
  //we can access the data by it's index number as below.

  private fetchAllTasks () {
    this.http.get<{[key:string]: Task}>("https://angularhttpclient-40ce2-default-rtdb.firebaseio.com/tasks.json")
    .pipe(map((response)=> {
      //Transform data
      let tasks = [];
      for(let key in response) {
        if(response.hasOwnProperty(key)) {
          this.allTasks.push(response[key])
          tasks.push({...response[key], id:key})
        }
      }
      return tasks;
    }))
    .subscribe((tasks)=> {
      console.log(tasks)
    })
    
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  closeMySqlCreateForm(){
    this.showMySqlCreateTaskForm = false;
  }
  printAllTasks() {
    for(let task of this.allTasks) console.log(task);
    console.log("tasks from method " ,this.allTasks)
  }
}
