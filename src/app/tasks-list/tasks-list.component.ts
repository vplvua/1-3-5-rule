import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { TasksService } from '../shared/tasks.service';
import { TaskModel } from '../shared/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  isFetching = false;

  constructor(
    private dataStorageService: DataStorageService,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.isFetching = true;
    this.dataStorageService
      .fetchTasksFromServer()
      .subscribe((tasks: TaskModel[]) => {
        this.isFetching = false;
        this.tasksService.setTasks(tasks ? tasks : []);
      });
  }
}
