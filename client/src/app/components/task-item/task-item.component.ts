import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Output() onDelete = new EventEmitter();
  @Output() onUpdate = new EventEmitter();
  @Output() onCheck = new EventEmitter();

  @Input() task: Task; 

  constructor() {}

  ngOnInit(): void {}

  handleEdit() {
    this.onUpdate.emit(this.task);
  }

  handleCheck(e: Event) {
    this.task.finished = !this.task.finished;
    this.onCheck.emit(this.task);
  }

  handleDelete() {
    this.onDelete.emit(this.task);
  }
}
