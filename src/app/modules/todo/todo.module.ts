import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoItemDetailComponent } from './pages/todo-item-detail/todo-item-detail.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FileUploadModule } from '../../shared/components/file-upload/file-upload.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TodoItemDetailComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FileUploadModule,
    SharedModule
  ]
})
export class TodoModule { }
