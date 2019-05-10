import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { AuthenticationService } from '../../../../core/http/authentication/authentication.service';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  formError: string = '';
  submittedForm: boolean = false;
  passwordsPreviews = {
    psw: true,
    confirm: true
  }

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.email, Validators.required], this.checkAvailableEmail()],
      username: ['', [Validators.required], this.checkAvailableUsername()],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      secondLastName: ['', [Validators.required]],
      passwords: this.fb.group({
        password: ['', [Validators.required]],
        confirm: ['', [Validators.required]]
      }, {
          validator: (group: FormGroup) => {
            let psw = group.get('password').value;
            let confirm = group.get('confirm').value;

            return psw === confirm ? null : { notSame: true };
          }
        })
    })

    this.signupForm.valueChanges
      .subscribe(value => {
        this.formError = '';
        this.submittedForm = false;
      })
  }

  submit(): void {
    this.submittedForm = true;

    if (this.signupForm.invalid) {
      this.formError = 'Hay errores en algunos campos';
      return;
    }

    const user: any = Object.assign({}, this.signupForm.value);

    user.password = user.passwords.password;
    delete user.passwords;

    this.authenticationService.signup(user)
      .subscribe(res => {
        console.log('Se registro el vato');
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.formError = 'Hubo un error';
      });

  }

  toggleField(key: string): void {
    this.passwordsPreviews[key] = !this.passwordsPreviews[key];
  }

  checkAvailableEmail(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return this.authenticationService.checkAvailableEmail(control.value)
        .pipe(
          map((res: any) => {
            return res.email ? { emailExists: true } : null;
          })
        )
    }
  }

  checkAvailableUsername(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return this.authenticationService.checkAvailableUsername(control.value)
        .pipe(
          map((res: any) => {
            return res.username ? { usernameExists: true } : null;
          })
        )
    }
  }

}
