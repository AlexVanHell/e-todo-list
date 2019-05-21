import { Component, OnInit, ContentChild, AfterContentInit, OnDestroy } from '@angular/core';


import { PaginationComponent as BsPaginationComponent } from 'ngx-bootstrap/pagination'
import { PaginationListComponent } from './pagination-list/pagination-list.component';
import { Subscription } from 'rxjs';
import { SearchInputRefDirective } from './directives/search-input-ref/search-input-ref.directive';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChild(BsPaginationComponent) bsPagination: BsPaginationComponent;
  @ContentChild(PaginationListComponent) listComponent: PaginationListComponent;
  @ContentChild(SearchInputRefDirective) searchInput: SearchInputRefDirective;

  subscription: Subscription;
  searchSubscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.listComponent.itemsPerPage = this.bsPagination.itemsPerPage;
    this.listComponent.ngOnChanges({});

    this.subscription = this.bsPagination.pageChanged
      .subscribe((value: { page?: number, itemsPerPage?: number }) => {
        this.listComponent.itemsPerPage = value.itemsPerPage;
        this.listComponent.page = value.page;
        this.listComponent.ngOnChanges({});
      });

    if (this.searchInput) {
      this.listComponent.searchParams = this.searchInput.searchParams.slice();

      this.searchSubscription = this.searchInput.onInput
        .subscribe((value: string) => {
          this.listComponent.searchValue = value;
          this.listComponent.ngOnChanges({});
        })
    }
  }

  ngOnDestroy() {
    if (this.subscription || this.subscription.unsubscribe) {
      this.subscription.unsubscribe();
    }

    if (this.searchSubscription || this.searchSubscription.unsubscribe) {
      this.searchSubscription.unsubscribe();
    }
  }

}
