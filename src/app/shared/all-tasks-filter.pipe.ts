import { Pipe, PipeTransform } from '@angular/core';
import { TaskModel } from './task.model';

@Pipe({
  name: 'allTasksFilter',
})
export class AllTasksFilterPipe implements PipeTransform {
  transform(tasks: TaskModel[], filter: string = ''): TaskModel[] {
    if (!filter.trim()) {
      return tasks;
    }

    return tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
  }
}
