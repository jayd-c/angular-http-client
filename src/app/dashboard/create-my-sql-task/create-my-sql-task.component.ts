import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from 'zone.js/lib/zone-impl';
import { MySqlTask } from '../../Model/mysqtask';

@Component({
  selector: 'app-create-my-sql-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-my-sql-task.component.html',
  styleUrl: './create-my-sql-task.component.css'
})
export class CreateMySqlTaskComponent {
  @Output()
  closeMySqlCreateForm: EventEmitter<boolean> = new EventEmitter<boolean>();


  onCloseForm() {
    this.closeMySqlCreateForm.emit(false);
  }

  @ViewChild('createMysqlForm') form: NgForm

  @Output()
  emitMySqlTaskData: EventEmitter<MySqlTask> = new EventEmitter<MySqlTask>();

  onMySqlCreateSubmitted() {
    this.emitMySqlTaskData.emit(this.form.value);
    this.closeMySqlCreateForm.emit(false)
    console.log(this.form.value)
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
