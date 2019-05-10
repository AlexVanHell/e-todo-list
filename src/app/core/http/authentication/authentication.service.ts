import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  endpoint: string = environment.apiUrl + '/auth';

  constructor(
    private http: HttpClient
  ) { }

  checkAvailableEmail(mail: string): Observable<any> {
    return timer(1000)
      .pipe(
        switchMap(() => {
          return this.http.get(`${this.endpoint}/user/email?email=${mail}`);
        })
      );
  }

  checkAvailableUsername(name: string): Observable<any> {
    return timer(1000)
      .pipe(
        switchMap(() => {
          return this.http.get(`${this.endpoint}/user/username?name=${name}`);
        })
      );
  }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.endpoint}/signup`, user);
  }
}
