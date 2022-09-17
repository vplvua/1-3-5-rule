import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksGroupComponent } from './tasks-list/tasks-group/tasks-group.component';
import { AllTasksComponent } from './tasks-list/all-tasks/all-tasks.component';
import { TaskEditComponent } from './tasks-list/task-edit/task-edit.component';
import { TaskComponent } from './tasks-list/all-tasks/task/task.component';
import { TasksService } from './shared/tasks.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ListMenuComponent } from './shared/list-menu/list-menu.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AllTasksFilterPipe } from './shared/all-tasks-filter.pipe';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksListComponent,
    TasksGroupComponent,
    AllTasksComponent,
    TaskEditComponent,
    TaskComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    ListMenuComponent,
    AllTasksFilterPipe,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    TasksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
