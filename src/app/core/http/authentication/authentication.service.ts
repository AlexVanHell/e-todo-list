import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { SignupRequest } from '../../../shared/models/request/signup';
import { AuthResponse, AvailableUsernameResponse, AvailableEmailResponse } from '../../../shared/models/response/auth-response';

@Injectable()
export class AuthenticationService {
  endpoint: string = environment.apiUrl + '/auth';

  constructor(
    private http: HttpClient
  ) { }

  checkAvailableEmail(mail: string): Observable<AvailableEmailResponse> {
    return timer(1000)
      .pipe(
        switchMap(() => {
          return this.http.get<AvailableEmailResponse>(`${this.endpoint}/user/email?email=${mail}`);
        })
      );
  }

  checkAvailableUsername(name: string): Observable<AvailableUsernameResponse> {
    return timer(1000)
      .pipe(
        switchMap(() => {
          return this.http.get<AvailableUsernameResponse>(`${this.endpoint}/user/username?name=${name}`);
        })
      );
  }

  signup(user: SignupRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.endpoint}/signup`, user);
  }
}
