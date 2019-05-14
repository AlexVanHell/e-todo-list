import { Injectable } from '@angular/core';
import { AuthenticatedUserResponse, AuthResponse } from '../../shared/models/response/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  sessionName: string = 'current-user';
  tokenName: string = 'token';

  constructor() { }

  getItem(name: string): string {
    return localStorage.getItem(name);
  }

  getUser(): AuthenticatedUserResponse {
    const value = this.getItem(this.sessionName);

    if (value) {
      return JSON.parse(value);
    } else {
      return null;
    }
  }

  getToken(): AuthResponse {
    const value = this.getItem(this.tokenName);

    if (value) {
      return JSON.parse(value);
    } else {
      return null;
    }
  }

  setUser(user: AuthenticatedUserResponse): void {
    localStorage.setItem(this.sessionName, JSON.stringify(user));
  }

  setToken(token: AuthResponse): void {
    localStorage.setItem(this.tokenName, JSON.stringify(token));
  }

  destroySession(): void {
    localStorage.removeItem(this.sessionName);
    localStorage.removeItem(this.tokenName);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
