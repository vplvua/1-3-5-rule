import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { TaskModel } from 'src/app/shared/task.model';
import { TasksService } from '../../shared/tasks.service';

@Component({
  selector: 'app-tasks-group',
  templateUrl: './tasks-group.component.html',
  styleUrls: ['./tasks-group.component.css'],
})
export class TasksGroupComponent implements OnInit, OnDestroy {
  tasksGroupURL: string = 'today';
  tasks: TaskModel[];
  mainTask = [];
  importantTasks = [];
  smallTasks = [];
  tasksChangedSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(
    private router: Router,
    private tasksService: TasksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tasksChangedSubscription = this.tasksService.tasksChanged.subscribe(
      (tasks: TaskModel[]) => {
        this.tasks = tasks;
        this.filteringTasksByImportance();
      }
    );

    this.tasks = this.tasksService.getTasks();

    this.routeSubscription = this.route.url.subscribe((url) => {
      this.tasksGroupURL = url[0].path;
      this.filteringTasksByImportance();
    });
  }

  private filteringTasksByImportance() {
    [this.mainTask, this.importantTasks, this.smallTasks] =
      this.tasksService.filterTasksByPeriod(this.tasks, this.tasksGroupURL);
  }

  ngOnDestroy() {
    this.tasksChangedSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
