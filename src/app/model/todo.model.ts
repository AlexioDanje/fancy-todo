export class Todo {
  title: string;
  id: number;
  description: string;
  dueDate: number;
  status: StatusEnum;
}

export enum StatusEnum {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
