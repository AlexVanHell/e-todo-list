import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, OnDestroy, AfterViewInit, AfterContentChecked, TemplateRef } from '@angular/core';
import { CollapsibleItemComponent } from '../collapsible-item/collapsible-item.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collapsible-list',
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.scss']
})
export class CollapsibleListComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(TemplateRef) itemsList: QueryList<TemplateRef<CollapsibleItemComponent>>;
  @ContentChildren(CollapsibleItemComponent, { descendants: true }) itemsComponents: QueryList<TemplateRef<CollapsibleItemComponent>>;
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('itemsList', this.itemsList);
    console.log('itemsComps', this.itemsComponents);

    this.subscription = this.itemsList.changes
      .subscribe(value => {
        console.log(value);
      });
  }

  ngOnDestroy() {
    if (this.subscription && this.subscription.unsubscribe) {
      this.subscription.unsubscribe();
    }
  }

}
