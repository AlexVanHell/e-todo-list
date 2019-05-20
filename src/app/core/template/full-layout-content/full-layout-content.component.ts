import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-full-layout-content',
  templateUrl: './full-layout-content.component.html',
  styleUrls: ['./full-layout-content.component.scss']
})
export class FullLayoutContentComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(SidebarComponent) sidebar: SidebarComponent;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.subscription = this.navbar.onMenuClick
      .subscribe(() => {
        this.sidebar.open();
      });
  }

  ngOnDestroy() {
    if (this.subscription && this.subscription.unsubscribe) {
      this.subscription.unsubscribe();
    }
  }

}
