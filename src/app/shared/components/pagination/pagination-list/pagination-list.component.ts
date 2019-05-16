import { Component, OnInit, Input, OnChanges, SimpleChanges, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-pagination-list',
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.scss']
})
export class PaginationListComponent implements OnInit, OnChanges {
  @ContentChild(TemplateRef) tmpl: TemplateRef<any>;
  @Input('items') items: any[] = [];
  paginatedItems: any[] = [];
  page: number = 1;
  itemsPerPage: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    this.setPaginatedItems(this.page, this.itemsPerPage);
  }

  setPaginatedItems(page: number, itemsPerPage: number): void {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    this.paginatedItems = this.items.slice(start, end);
  }

}
