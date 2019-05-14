import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainConfirmationModalComponent } from './main-confirmation-modal.component';

import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
  declarations: [MainConfirmationModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    MainConfirmationModalComponent
  ]
})
export class MainConfirmationModalModule { }
