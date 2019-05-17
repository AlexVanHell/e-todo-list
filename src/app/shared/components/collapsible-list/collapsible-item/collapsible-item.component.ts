import { Component, OnInit, Input, ContentChild, TemplateRef, AfterContentInit, ElementRef, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { CollapsibleItemHeaderComponent } from '../collapsible-item-header/collapsible-item-header.component';
import { CollapsibleItemBodyComponent } from '../collapsible-item-body/collapsible-item-body.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collapsible-item',
  templateUrl: './collapsible-item.component.html',
  styleUrls: ['./collapsible-item.component.scss']
})
export class CollapsibleItemComponent implements OnInit, AfterContentInit, OnDestroy {
  @Output() onToggle: EventEmitter<boolean>;
  @Input() isCollapsed: boolean = true;
  @ContentChild(CollapsibleItemHeaderComponent) topContent: CollapsibleItemHeaderComponent;
  @ContentChild(CollapsibleItemBodyComponent) bottomContent: CollapsibleItemBodyComponent;
  subscription: Subscription;

  constructor() {
    this.onToggle = new EventEmitter();
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.bottomContent.isCollapsed = this.isCollapsed;

    this.subscription = this.topContent.onClick
      .subscribe(value => {
        this.update(!this.isCollapsed);
        this.onToggle.emit(!this.isCollapsed);
      });
  }

  update(value: boolean): void {
    this.isCollapsed = value;
    this.bottomContent.isCollapsed = value;
  }

  ngOnDestroy() {
    if (this.subscription && this.subscription.unsubscribe) {
      this.subscription.unsubscribe();
    }
  }

}
