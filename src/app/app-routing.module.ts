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
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'about', component: AboutComponent },
  { path: 'list', component: TasksListComponent, canActivate: [AuthGuard] },
  { path: 'today', component: TasksGroupComponent, canActivate: [AuthGuard] },
  { path: 'week', component: TasksGroupComponent, canActivate: [AuthGuard] },
  { path: 'month', component: TasksGroupComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: TaskEditComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: TaskEditComponent, canActivate: [AuthGuard] },
  { path: 'all', component: AllTasksComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
