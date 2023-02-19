import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksGroupComponent } from './tasks-list/tasks-group/tasks-group.component';
import { AllTasksComponent } from './tasks-list/all-tasks/all-tasks.component';
import { TaskEditComponent } from './tasks-list/task-edit/task-edit.component';
import { AuthComponent } from './auth/auth.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  { path: 'today', component: TasksListComponent, canActivate: [AuthGuard] },
  { path: 'week', component: TasksListComponent, canActivate: [AuthGuard] },
  { path: 'month', component: TasksListComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: TaskEditComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: TaskEditComponent, canActivate: [AuthGuard] },
  { path: 'all', component: AllTasksComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
