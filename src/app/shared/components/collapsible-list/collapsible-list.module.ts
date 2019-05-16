import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from './collapsible-list/collapsible-list.component';
import { CollapsibleItemComponent } from './collapsible-item/collapsible-item.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [CollapsibleListComponent, CollapsibleItemComponent],
  imports: [
    CommonModule,
    CollapseModule
  ],
  exports: [
    CollapsibleListComponent,
    CollapsibleItemComponent
  ]
})
export class CollapsibleListModule { }
