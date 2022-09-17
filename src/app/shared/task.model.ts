export class TaskModel {
  public name: string;
  public description: string;
  public creationDate: number;
  public taskGroup: string;
  public taskImportance: string;
  public completed: boolean;

  constructor(
    name: string,
    description: string,
    creationDate: number,
    group: string,
    importance: string,
    completed: boolean
  ) {
    this.name = name;
    this.description = description;
    this.creationDate = creationDate;
    this.taskGroup = group;
    this.taskImportance = importance;
    this.completed = completed;
  }
}
