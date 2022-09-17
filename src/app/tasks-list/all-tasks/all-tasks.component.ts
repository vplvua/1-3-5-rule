import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { TaskModel } from 'src/app/shared/task.model';
import { TasksService } from '../../shared/tasks.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css'],
})
export class AllTasksComponent implements OnInit, OnDestroy {
  tasks: TaskModel[] = [];
  tasksChangedSubscription: Subscription;
  filterString = '';

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksChangedSubscription = this.tasksService.tasksChanged.subscribe(
      (tasks: TaskModel[]) => {
        this.tasks = tasks;
      }
    );

    this.tasks = this.tasksService.getTasks();
  }

  ngOnDestroy() {
    this.tasksChangedSubscription.unsubscribe();
  }
}
