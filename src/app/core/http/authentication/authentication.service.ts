import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthenticationService {
  endpoint: string = environment.apiUrl + '/auth';

  constructor(
    private http: HttpClient
  ) { }

  checkAvailableEmail(mail: string): Observable<any> {
    return this.http.get(`${this.endpoint}/user/email?email=${mail}`);
  }
}
