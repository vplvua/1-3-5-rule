import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';
import { TasksService } from '../shared/tasks.service';
import { TaskModel } from '../shared/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  constructor() {}
}
