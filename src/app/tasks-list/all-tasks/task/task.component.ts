import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskModel } from 'src/app/shared/task.model';
import { TasksService } from 'src/app/shared/tasks.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() taskItem: TaskModel;

  constructor(
    private router: Router,
    private tasksService: TasksService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {}

  deleteTask() {
    this.tasksService.deleteTask(this.taskItem.creationDate);
    this.dataStorageService.storeTasksToServer();
  }

  editItem() {
    this.router.navigate(['./edit', this.taskItem.creationDate]);
  }

  toggleItem() {
    this.tasksService.onToggle(this.taskItem.creationDate);
  }
}
