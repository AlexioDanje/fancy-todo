import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Router} from '@angular/router';
import {StatusEnum, Todo} from '../../model/todo.model';
import {DataService} from '../../services/data.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalComponent} from '../../modal/modal.component';
import {Subscription} from 'rxjs';

@Component({
             selector: 'todo-list',
             templateUrl: './todo-list.component.html',
             styleUrls: ['./todo-list.component.less']
           })
export class TodoListComponent {
  todos: Todo[] = [];
  todoComplete: Todo[] = [];
  title = '';
  complete = false;

  constructor(private todoService: TodoService, private router: Router, private dataService: DataService, public matDialog: MatDialog) {

    this.dataService.currentMessage.subscribe(message => this.complete = message);
    console.log(this.complete);
    this.retrieveTodos();
  }

  ngOnInit(): void {
  }

  retrieveTodos(): void {
    this.todoService.getAll().subscribe(data => {
      this.todos = data.reverse();
      // tslint:disable-next-line:prefer-for-of
      if (this.complete){
        this.todos = this.todos.filter(todo => todo.status === StatusEnum.DONE);
      }
    });
  }

  trackByMethod(index, todo) {
    return todo.id;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
  openDialog(){
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";

    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
}


