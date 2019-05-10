import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../../core/http/authentication/authentication.service';

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
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]],
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

    alert(this.signupForm.value.email);
  }

  toggleField(key: string): void {
    this.passwordsPreviews[key] = !this.passwordsPreviews[key];
  }

  checkAvailableEmail(): void {
    const mail: string = this.signupForm.get('email').value;

    this.authenticationService.checkAvailableEmail(mail)
      .subscribe(value => {
        console.log(value);
      });
  }

}
