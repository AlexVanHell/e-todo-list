import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullLayoutContentRoutingModule } from './full-layout-content-routing.module';
import { FullLayoutContentComponent } from './full-layout-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [FullLayoutContentComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    FullLayoutContentRoutingModule,
    FontAwesomeModule
  ]
})
export class FullLayoutContentModule { }
