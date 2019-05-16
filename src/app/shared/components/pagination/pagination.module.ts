import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { PaginationListComponent } from './pagination-list/pagination-list.component';

@NgModule({
  declarations: [PaginationComponent, PaginationListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    PaginationListComponent
  ]
})
export class PaginationModule { }
