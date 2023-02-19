import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

import { TaskModel } from './task.model';

@Injectable()
export class TasksService {
  tasksChanged = new Subject<TaskModel[]>();
  private tasks: TaskModel[];

  setTasks(tasks: TaskModel[]) {
    this.tasks = tasks;
    this.tasksChanged.next(this.tasks.slice());
  }

  getTasks() {
    if (!this.tasks) {
      this.tasks = [];
    }
    return this.tasks.slice();
  }

  getTask(id: number) {
    const task = this.tasks.find((element) => {
      return id === element.creationDate;
    });
  }

  addTask(task: TaskModel) {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
  }

  updateTask(id: number, task: TaskModel) {
    const delItem = this.tasks.indexOf(
      this.tasks.find((element) => element['creationDate'] === +id)
    );
    this.tasks.splice(delItem, 1, task);
    this.tasksChanged.next(this.tasks.slice());
  }

  deleteTask(id: number) {
    const delItem = this.tasks.indexOf(
      this.tasks.find((element) => element['creationDate'] === +id)
    );
    this.tasks.splice(delItem, 1);
    this.tasksChanged.next(this.tasks.slice());
  }

  onToggle(id: number) {
    const toggleTask = this.tasks.indexOf(
      this.tasks.find((element) => element['creationDate'] === +id)
    );
    this.tasks[toggleTask].completed = !this.tasks[toggleTask].completed;
    this.tasksChanged.next(this.tasks.slice());
  }

  filterTasksByPeriod(tasks: TaskModel[], period: string) {
    const mainTask = tasks.filter(
      (element) =>
        element['taskGroup'].toLowerCase() === period &&
        element['taskImportance'] === 'Main'
    );
    const importantTasks = tasks.filter(
      (element) =>
        element['taskGroup'].toLowerCase() === period &&
        element['taskImportance'] === 'Important'
    );
    const smallTasks = tasks.filter(
      (element) =>
        element['taskGroup'].toLowerCase() === period &&
        element['taskImportance'] === 'Small'
    );
    return [mainTask, importantTasks, smallTasks];
  }
}
