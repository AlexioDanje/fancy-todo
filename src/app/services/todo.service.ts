import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';

const baseUrl = 'http://localhost:8080/todo';

@Injectable({ providedIn: 'root' })

export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(baseUrl, { responseType: 'json' });
  }

  get(id): Observable<Todo> {
    return this.http.get<Todo>(`${baseUrl}/${id}`);
  }

  create(title: string): Observable<Todo> {
    const data = {
      title
    };
    return this.http.post<Todo>(baseUrl, data);
  }

  update(id: number, title: string): Observable<Todo> {
    const data = {
      title
    };
    return this.http.put<Todo>(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const data = {
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
      status: todo.status
    };
    return this.http.put<Todo>(`${baseUrl}/${todo.id}`, data);
  }
}
