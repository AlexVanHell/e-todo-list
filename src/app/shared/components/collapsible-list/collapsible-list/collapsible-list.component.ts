import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, OnDestroy, TemplateRef, Input } from '@angular/core';
import { CollapsibleItemComponent } from '../collapsible-item/collapsible-item.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collapsible-list',
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.scss']
})
export class CollapsibleListComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(CollapsibleItemComponent, { descendants: true }) itemsComponents: QueryList<CollapsibleItemComponent>;
  @Input() multiple: boolean = true;
  subscription: Subscription;
  toggleSubscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.subscription = this.itemsComponents.changes
      .subscribe(value => {
        //console.log(value);
        if (this.multiple) {
          this.processChildren();
        }
      });
  }

  ngOnDestroy() {
    if (this.subscription && this.subscription.unsubscribe) {
      this.subscription.unsubscribe();
    }

    if (this.toggleSubscriptions && this.toggleSubscriptions.length) {
      this.toggleSubscriptions.forEach(subs => {
        subs.unsubscribe();
      });
    }
  }

  processChildren(): void {
    this.toggleSubscriptions = [];

    this.itemsComponents.forEach(component => {
      let subs = component.onToggle.subscribe(value => {
        this.itemsComponents.forEach(x => {
          if (x !== component) {
            x.update(true);
          }
        });
      });

      this.toggleSubscriptions.push(subs);
    });
  }

}
