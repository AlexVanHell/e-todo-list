import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationHttpService } from '../../../../core/http/authentication/authentication-http.service';
import { AuthenticationService } from '../../../../core/authentication/authentication.service';

interface FormError {
  type: 'warning' | 'danger',
  message: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formError: FormError = null;
  loginForm: FormGroup;
  submittedForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authHttpService: AuthenticationHttpService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.loginForm.valueChanges
      .subscribe(value => {
        this.formError = null;
        this.submittedForm = false;
      });
  }

  submit(): void {
    if (this.loginForm.invalid) {
      this.formError = {
        type: 'warning',
        message: 'Hay errores en algunos campos'
      }
      return;
    }

    this.authHttpService.login(this.loginForm.value)
      .subscribe(res => {
        //console.log(res);
        this.authService.setToken(res);

        this.authHttpService.getAuthentication(res.token)
          .subscribe(user => {
            this.authService.setUser(user);
            this.router.navigate(['/home']);
          });
      }, err => {
        if (err.status) {
          this.formError = {
            type: 'danger',
            message: 'Usuario y/o contraseña incorrectos'
          }
        }
      });
  }

}
