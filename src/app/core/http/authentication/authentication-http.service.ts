import { Injectable } from '@angular/core';
import { Observable, timer, throwError, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { switchMap, catchError } from 'rxjs/operators';
import { SignupRequest } from '../../../shared/models/request/signup';
import { AuthResponse, AvailableUsernameResponse, AvailableEmailResponse, AuthenticatedUserResponse } from '../../../shared/models/response/auth-response';
import { LoginRequest } from '../../../shared/models/request/login';

@Injectable()
export class AuthenticationHttpService {
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

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.endpoint}/login`, credentials)
      .pipe(
        catchError<any, any>(err => {
          if (err.error) {
            const error = err.error;

            if (error.status === 404 || error.status === 401) {
              return of(error);
            }
          }

          return throwError(err);
        })
      );
  }

  getAuthentication(token: string): Observable<AuthenticatedUserResponse> {
    return this.http.get<AuthenticatedUserResponse>(`${this.endpoint}/user`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).pipe(
      catchError<any, any>(err => {
        if (err.error) {
          const error = err.error;

          if (error.status === 401) {
            return of(error);
          }
        }

        return throwError(err);
      })
    );
  }
}
