import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from './core/guards/no-auth/no-auth.guard';

const routes: Routes = [{
  path: '',
  loadChildren: './modules/authentication/authentication.module#AuthenticationModule',
  canActivateChild: [NoAuthGuard],
}, {
  path: '',
  loadChildren: './modules/home/home.module#HomeModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
