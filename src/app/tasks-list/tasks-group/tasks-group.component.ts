import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { TaskModel } from 'src/app/shared/task.model';
import { TasksService } from '../../shared/tasks.service';

@Component({
  selector: 'app-tasks-group',
  templateUrl: './tasks-group.component.html',
  styleUrls: ['./tasks-group.component.css'],
})
export class TasksGroupComponent implements OnInit, OnDestroy {
  tasksGroupURL: string = this.router.url.slice(1);
  tasks: TaskModel[];
  mainTask = [];
  importantTasks = [];
  smallTasks = [];
  tasksChangedSubscription: Subscription;

  constructor(private router: Router, private tasksService: TasksService) {}

  ngOnInit() {
    if (this.tasksGroupURL === 'list') {
      this.router.navigate(['/today']);
    }

    this.tasksChangedSubscription = this.tasksService.tasksChanged.subscribe(
      (tasks: TaskModel[]) => {
        this.tasks = tasks;
      }
    );

    this.tasks = this.tasksService.getTasks();

    this.mainTask = this.tasks.filter(
      (element) =>
        element['taskGroup'].toLowerCase() === this.tasksGroupURL &&
        element['taskImportance'] === 'Main'
    );
    this.importantTasks = this.tasks.filter(
      (element) =>
        element['taskGroup'].toLowerCase() === this.tasksGroupURL &&
        element['taskImportance'] === 'Important'
    );
    this.smallTasks = this.tasks.filter(
      (element) =>
        element['taskGroup'].toLowerCase() === this.tasksGroupURL &&
        element['taskImportance'] === 'Small'
    );
  }

  ngOnDestroy() {
    this.tasksChangedSubscription.unsubscribe();
  }
}
