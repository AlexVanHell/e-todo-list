import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/authentication/authentication.service';
import { Router } from '@angular/router';
import { IUser, User } from '../../../../shared/models/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: IUser = {};

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.user = new User(this.authService.getUser());
  }

  ngOnInit() {
  }

  logout(): void {
    this.authService.destroySession();
    this.router.navigate(['/login']);
  }

  handleLogout(event: string): void {
    this.logout();
  }

}
