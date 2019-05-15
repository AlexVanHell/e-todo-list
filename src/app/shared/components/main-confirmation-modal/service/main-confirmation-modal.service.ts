import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MainAlert, MainAlertAction, MainAlertStream } from '../../../models/app/main-alert';

@Injectable({
  providedIn: 'root'
})
export class MainConfirmationModalService {
  alertSubject: Subject<MainAlertStream>;

  constructor() {
    this.alertSubject = new Subject();
  }

  show(obj: MainAlert): Promise<MainAlertAction> {
    return new Promise((resolve, reject) => {
      this.alertSubject.next({
        resolve,
        info: obj
      })
    });
  }
}
