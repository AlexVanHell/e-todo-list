import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainConfirmationModalService {
  alertSubject: Subject<any>;

  constructor() {
    this.alertSubject = new Subject();
  }

  show(obj: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.alertSubject.next({
        resolve,
        info: obj
      })
    });
  }
}
