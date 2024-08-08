import { Component, EventEmitter, output, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../../Model/task';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  taskCode = "";

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  emitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  @ViewChild('createTaskForm') form: NgForm


  onFormSubmitted() {
    this.emitTaskData.emit(this.form.value);
    this.CloseForm.emit(false)
    console.log(this.form.value)

  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  createTaskCode() {
    let taskNumber = '';
    let code1 = this.form.value.title;
    let code2 = this.form.value.createdAt;
    let code3= this.form.value.assignedTo;
    let code4 = Date.now();
    taskNumber = code1.slice(0,1) + code1.length + code2.slice(2,4) + "_" + code3.slice(0,3) + code4;

    this.form.form.patchValue({
      taskCode:taskNumber
    })
  }
}
