import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'zone.js/lib/zone-impl';

@Component({
  selector: 'app-create-my-sql-task',
  standalone: true,
  imports: [],
  templateUrl: './create-my-sql-task.component.html',
  styleUrl: './create-my-sql-task.component.css'
})
export class CreateMySqlTaskComponent {
  @Output()
  closeMySqlCreateForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCloseForm() {
    this.closeMySqlCreateForm.emit(false);
  }
}
