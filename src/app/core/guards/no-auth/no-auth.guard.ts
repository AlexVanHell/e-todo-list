import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivateChild {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogged: boolean = this.authService.isLoggedIn();

    if (isLogged) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }

}
