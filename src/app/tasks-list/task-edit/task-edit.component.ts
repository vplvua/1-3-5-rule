import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskModel } from 'src/app/shared/task.model';
import { TasksService } from '../../shared/tasks.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent implements OnInit, OnDestroy {
  tasksGroup = [' ', 'Today', 'Week', 'Month'];
  tasksImportance = [' ', 'Main', 'Important', 'Small'];
  editTaskForm: FormGroup;
  creationDate = new Date().getTime();
  tasks: TaskModel[];
  taskToEdit: TaskModel;
  taskToEditID: number = this.route.snapshot.params['id'];

  constructor(
    private taskService: TasksService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();

    if (!this.taskToEditID) {
      /// New Task
      this.editTaskForm = new FormGroup({
        taskName: new FormControl(null, Validators.required),
        taskDescription: new FormControl(' '),
        taskPeriod: new FormControl(' '),
        taskImportance: new FormControl(null),
      });
    } else {
      this.taskToEdit = this.tasks.find(
        (element) => element['creationDate'] === +this.taskToEditID
      );
      this.editTaskForm = new FormGroup({
        taskName: new FormControl(this.taskToEdit.name, Validators.required),
        taskDescription: new FormControl(this.taskToEdit.description),
        taskPeriod: new FormControl(this.taskToEdit.taskGroup),
        taskImportance: new FormControl(this.taskToEdit.taskImportance),
      });
      this.creationDate = this.taskToEdit.creationDate;
    }
  }

  onSubmit() {
    const task: TaskModel = new TaskModel(
      this.editTaskForm.value.taskName,
      this.editTaskForm.value.taskDescription,
      new Date().getTime(),
      this.editTaskForm.value.taskPeriod,
      this.editTaskForm.value.taskImportance,
      false
    );
    if (!this.taskToEditID) {
      this.taskService.addTask(task);
    } else {
      this.taskService.updateTask(this.taskToEditID, task);
    }
    this.router.navigate(['all']);
  }

  onCancel() {
    this.router.navigate(['all']);
  }

  ngOnDestroy() {
    this.dataStorageService.storeTasksToServer();
  }
}
