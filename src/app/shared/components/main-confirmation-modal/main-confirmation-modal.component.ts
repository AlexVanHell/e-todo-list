import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MainConfirmationModalService } from './service/main-confirmation-modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-confirmation-modal',
  templateUrl: './main-confirmation-modal.component.html',
  styleUrls: ['./main-confirmation-modal.component.scss']
})
export class MainConfirmationModalComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  info: any;
  subscription: Subscription;
  resolveFn: (value?: string) => void | PromiseLike<void>;
  @ViewChild('template') template: TemplateRef<any>;

  constructor(
    private modalService: BsModalService,
    private mcmService: MainConfirmationModalService
  ) { }

  ngOnInit() {
    this.subscription = this.mcmService.alertSubject
      .subscribe((obj) => {
        this.resolveFn = obj.resolve;

        this.openModal(this.template);
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
    this.resolveFn('accept');
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
    this.resolveFn('cancel');
  }
}