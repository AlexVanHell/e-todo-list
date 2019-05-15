import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordPreviewDirective } from './directives/password-preview/password-preview.directive';
import { PasswordPreviewComponent } from './components/password-preview/password-preview.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { CustomDatePipe } from './pipes/custom-date/custom-date.pipe';

@NgModule({
  declarations: [PasswordPreviewDirective, PasswordPreviewComponent, SpinnerLoaderComponent, CustomDatePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    PasswordPreviewDirective,
    PasswordPreviewComponent,
    FontAwesomeModule,
    SpinnerLoaderComponent,
    CustomDatePipe
  ]
})
export class SharedModule { }
