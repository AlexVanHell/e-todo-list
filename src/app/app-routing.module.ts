import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from './core/guards/no-auth/no-auth.guard';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [{
  path: '',
  loadChildren: './modules/authentication/authentication.module#AuthenticationModule',
  canActivateChild: [NoAuthGuard],
}, {
  path: '',
  loadChildren: './core/template/full-layout-content/full-layout-content.module#FullLayoutContentModule',
  canActivateChild: [AuthGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
