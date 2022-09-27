import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter();

  newTask: Task;
  taskName: string;
  taskDescription: string;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.newTask = {
      // _id: Math.floor(Math.random() * 10000000000),
      name: this.taskName,
      description: this.taskDescription,
      finished: false,
    };

    this.onAddTask.emit(this.newTask);

    this.taskName = '';
    this.taskDescription = '';
  }
}
