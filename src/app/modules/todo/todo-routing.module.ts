import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoItemDetailComponent } from './pages/todo-item-detail/todo-item-detail.component';

const routes: Routes = [{
  path: ':id',
  component: TodoItemDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
