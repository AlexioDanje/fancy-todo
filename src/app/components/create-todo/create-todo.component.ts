import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from "../../model/todo.model";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
             selector: 'create-todo',
             templateUrl: './create-todo.component.html',
             styleUrls: ['./create-todo.component.less']
           })
export class CreateTodoComponent {

  public todo: Todo = new Todo();
  public submitted: boolean = false;
  todos: any = [];

  constructor(private todoService: TodoService, private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
  }

  saveTodo(): void {
    this.todoService.create(this.todo.title).subscribe(response => {
      this.todos.push(response);
    },);
    this.router.navigate(['/todos']);
  }

  retrieveTodos(): void {
    this.todoService.getAll().subscribe(data => this.todos = data);
  }
}

