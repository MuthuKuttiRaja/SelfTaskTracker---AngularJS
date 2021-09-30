import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {TaskService} from '../task.service';
import {Task} from '../task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  task: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  addTask(): void {
      this.task = {
        id: 1, notes: '', timeStarted: '',
        name: $('#taskName').val().toString(),
        status: $( '#taskStatus option:selected' ).text(),
        project: $('#projectName').val().toString(),
        timeCompleted:  $('#estimatedCompleteTime').val().toString(),
        priority: $( '#taskPriority option:selected' ).val().toString()
    };
      this.taskService.createTask(this.task).subscribe((task: Task) => {
        console.log('Task created, ', task);
      });
      this.emptyTaskInputs();
    }

    emptyTaskInputs(): void {
        $('#taskName').val('');
        $('#taskStatus').val('');
        $('#projectName').val('');
        $('#estimatedCompleteTime').val('');
        $('#taskPriority').val('');
    }

}
