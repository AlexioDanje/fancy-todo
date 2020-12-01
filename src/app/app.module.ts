import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DataService } from './services/data.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModalComponent } from './modal/modal.component';

@NgModule({
            declarations: [
              AppComponent,
              TodoListComponent,
              TodoItemComponent,
              CreateTodoComponent,
              NavbarComponent,
              ModalComponent
            ],
            imports: [
              BrowserModule,
              FormsModule,
              AppRoutingModule,
              HttpClientModule,
              FontAwesomeModule,
              MatDialogModule,
              BrowserAnimationsModule,
              MatTooltipModule,
              MatButtonModule,
              MatFormFieldModule,
              MatSidenavModule,
              MatIconModule,
              MatToolbarModule,
              MatCardModule,
              MatListModule,
              MatInputModule,
              MatExpansionModule,
              MatDatepickerModule,
              MatNativeDateModule,
              ReactiveFormsModule,
              MatSelectModule,
              DragDropModule

            ],
            providers: [BrowserModule, DataService],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
