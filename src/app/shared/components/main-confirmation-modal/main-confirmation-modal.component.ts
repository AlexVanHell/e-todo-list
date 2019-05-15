import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MainConfirmationModalService } from './service/main-confirmation-modal.service';
import { Subscription } from 'rxjs';
import { MainAlert, MainAlertAction } from '../../models/app/main-alert';

@Component({
  selector: 'app-main-confirmation-modal',
  templateUrl: './main-confirmation-modal.component.html',
  styleUrls: ['./main-confirmation-modal.component.scss']
})
export class MainConfirmationModalComponent implements OnInit {
  modalRef: BsModalRef;
  info: MainAlert;
  subscription: Subscription;
  resolveFn: (value?: MainAlertAction) => void | PromiseLike<void>;
  @ViewChild('template') template: TemplateRef<any>;

  constructor(
    private modalService: BsModalService,
    private mcmService: MainConfirmationModalService
  ) { }

  ngOnInit() {
    this.subscription = this.mcmService.alertSubject
      .subscribe((obj) => {
        this.resolveFn = obj.resolve;
        this.info = Object.assign({}, this.getDefaultAlert(), obj.info);
        this.openModal(this.template);
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef.hide();
    this.resolveFn({
      accepted: true,
      canceled: false
    });
  }

  decline(): void {
    this.modalRef.hide();
    this.resolveFn({
      accepted: false,
      canceled: false
    });
  }

  getDefaultAlert(): MainAlert {
    return {
      title: '',
      body: '¿Estás seguro de realizar la acción?',
      acceptButtonColor: 'primary',
      acceptButtonText: 'Si',
      cancelButton: true,
      cancelButtonColor: 'default',
      cancelButtonText: 'No',
      important: false
    }
  }
}