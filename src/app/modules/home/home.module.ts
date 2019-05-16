import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared/shared.module';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

import { PaginationModule as BsPaginationModule } from 'ngx-bootstrap/pagination';
import { CollapsibleListModule } from '../../shared/components/collapsible-list/collapsible-list.module';

@NgModule({
  declarations: [HomeComponent, UserInfoComponent, TodoListComponent, TodoItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    SharedModule,
    PaginationModule,
    BsPaginationModule.forRoot(),
    CollapsibleListModule
  ]
})
export class HomeModule { }
