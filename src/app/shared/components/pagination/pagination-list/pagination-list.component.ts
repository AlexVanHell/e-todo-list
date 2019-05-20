import { Component, OnInit, Input, OnChanges, SimpleChanges, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-pagination-list',
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.scss']
})
export class PaginationListComponent implements OnInit, OnChanges {
  @ContentChild(TemplateRef) tmpl: TemplateRef<any>;
  @Input('items')
  set list(items: any[]) {
    if (Array.isArray(items)) {
      this.items = items.map((x, i) => {
        x.absoluteIndex = i;
        return x;
      });
    }
  }

  items: any[] = [];
  paginatedItems: any[] = [];
  page: number = 1;
  itemsPerPage: number = 0;
  searchParams: string[] = [];
  searchValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.searchValue) {
      this.setSearchItems(this.searchValue, this.searchParams);
    } else {
      this.setPaginatedItems(this.page, this.itemsPerPage);
    }
  }

  setPaginatedItems(page: number, itemsPerPage: number): void {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    this.paginatedItems = this.items.slice(start, end);
  }

  setSearchItems(value: string, searchParams: string[] = []): void {
    this.paginatedItems = this.items.filter(item => {
      return Object.keys(item)
        .filter(key => searchParams.indexOf(key) > -1)
        .filter(key => {
          return item[key].toString().indexOf(value) > -1;
        }).length > 0;
    })
  }

}
