import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutContentComponent } from './full-layout-content.component';

const routes: Routes = [{
  path: '',
  component: FullLayoutContentComponent,
  children: [
    {
      path: '',
      loadChildren: '../../../modules/home/home.module#HomeModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutContentRoutingModule { }
