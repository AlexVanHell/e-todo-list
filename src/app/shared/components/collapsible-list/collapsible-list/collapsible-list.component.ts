import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CollapsibleItemComponent } from '../collapsible-item/collapsible-item.component';

@Component({
  selector: 'app-collapsible-list',
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.scss']
})
export class CollapsibleListComponent implements OnInit, AfterContentInit {
  @ContentChildren(CollapsibleItemComponent) itemsComponents: QueryList<CollapsibleItemComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('itemsComponents', this.itemsComponents);
  }

}
