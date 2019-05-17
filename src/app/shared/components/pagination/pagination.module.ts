import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { PaginationListComponent } from './pagination-list/pagination-list.component';
import { SearchInputRefDirective } from './directives/search-input-ref/search-input-ref.directive';

@NgModule({
  declarations: [PaginationComponent, PaginationListComponent, SearchInputRefDirective],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    PaginationListComponent,
    SearchInputRefDirective
  ]
})
export class PaginationModule { }
