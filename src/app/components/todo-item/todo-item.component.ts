import { Component, Input } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { StatusEnum, Todo } from '../../model/todo.model';
import { Router } from "@angular/router";

@Component({
             selector: 'todo-item',
             templateUrl: './todo-item.component.html',
             styleUrls: ['./todo-item.component.less']
           })
export class TodoItemComponent {

  @Input() todo: Todo;
  faTrash = faTrashAlt;
  isOpen: boolean = false;
  isWritable: boolean = false;
  status: StatusEnum[] = [StatusEnum.OPEN, StatusEnum.IN_PROGRESS, StatusEnum.DONE];

  constructor(
    private todoService: TodoService,
    private router: Router) {
  }

  deleteTodo(): void {
    this.todoService.delete(this.todo.id).subscribe(() =>
                                                      this.router.navigate(['/todos']),
    );
  }

  updateTodo(): void {
    this.togglePanel();
    if (this.isWritable) {
      this.todoService.updateTodo(this.todo).subscribe();
    } else {
      this.isWritable = true;
    }
  }

  togglePanel() {
    this.isOpen = !this.isOpen
  }
}



