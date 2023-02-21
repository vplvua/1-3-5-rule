import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TasksService } from './tasks.service';
import { TaskModel } from './task.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private tasksService: TasksService) {}

  storeTasksToServer() {
    const tasks = this.tasksService.getTasks();
    this.http
      .put(
        'https://project-2e685-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        tasks
      )
      .subscribe((response) => {});
  }

  fetchTasksFromServer() {
    return this.http.get<TaskModel[]>(
      'https://project-2e685-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
    );
  }
}
