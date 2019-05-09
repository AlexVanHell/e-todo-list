import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordPreviewDirective } from './directives/password-preview/password-preview.directive';
import { PasswordPreviewComponent } from './components/password-preview/password-preview.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PasswordPreviewDirective, PasswordPreviewComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PasswordPreviewDirective,
    PasswordPreviewComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
