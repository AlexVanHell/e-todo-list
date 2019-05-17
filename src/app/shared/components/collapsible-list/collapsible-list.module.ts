import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from './collapsible-list/collapsible-list.component';
import { CollapsibleItemComponent } from './collapsible-item/collapsible-item.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsibleItemHeaderComponent } from './collapsible-item-header/collapsible-item-header.component';
import { CollapsibleItemBodyComponent } from './collapsible-item-body/collapsible-item-body.component';

@NgModule({
  declarations: [CollapsibleListComponent, CollapsibleItemComponent, CollapsibleItemHeaderComponent, CollapsibleItemBodyComponent],
  imports: [
    CommonModule,
    CollapseModule
  ],
  exports: [
    CollapsibleListComponent,
    CollapsibleItemComponent,
    CollapsibleItemHeaderComponent,
    CollapsibleItemBodyComponent
  ]
})
export class CollapsibleListModule { }
