import { Component, EventEmitter, output, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  emitTaskData: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('createTaskForm') form: NgForm

  onFormSubmitted() {
    this.emitTaskData.emit(this.form.value);
    console.log(this.form.value)

  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }
}
