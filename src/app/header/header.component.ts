import { Component, OnDestroy, OnInit } from '@angular/core';
import { exhaustMap, map, Subscription, take } from 'rxjs';
import { Router } from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { TasksService } from '../shared/tasks.service';
import { AuthService } from '../auth/auth.service';
import { TaskModel } from '../shared/task.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isFetching = false;
  private userSub: Subscription;
  isAuthenticated = false;
  tasksChangedSubscription: Subscription;
  tasks: TaskModel[];

  constructor(
    private dataStorageService: DataStorageService,
    private tasksService: TasksService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;

      if (this.isAuthenticated) {
        this.isFetching = true;

        this.dataStorageService
          .fetchTasksFromServer()
          .subscribe((tasks: TaskModel[]) => {
            this.isFetching = false;
            this.tasksService.setTasks(tasks ? tasks : []);
          });
      }
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
