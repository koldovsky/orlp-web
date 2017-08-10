import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SignupService} from './signup.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../dto/User';

function passwordMatcher(c: AbstractControl) {
  const passwordControl = c.get('password');
  const confirmPassword = c.get('confirmPassword');
  if (passwordControl.value === confirmPassword.value) {
    return null;
  }
  return {'match': true};
}

@Component({
  templateUrl: ('./signup.component.html')
})

export class SignUpComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();
  mailNotSended: boolean;
  success: boolean;
  error: boolean;
  errorEmailExists: boolean;


  constructor(private router: Router,
              private signupService: SignupService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      }, {validator: passwordMatcher})
    });
  }

  register(): void {
    this.error = false;
    this.success = false;
    this.errorEmailExists = false;
    this.mailNotSended = false;
    this.transferingDataFromFormToUserObj();
    console.log(this.user);
    this.signupService.registerUser(this.user)
      .subscribe(() => {
          this.success = true;
        },
        (response) => this.processError(response));
  }

  transferingDataFromFormToUserObj() {
    this.user.account.password = this.userForm.value.passwordGroup.password;
    this.user.account.email = this.userForm.value.email;
    this.user.person.firstName = this.userForm.value.firstName;
    this.user.person.lastName = this.userForm.value.lastName;
  }

  private processError(response) {
    console.log(response.status);
    console.log(response.body);

    if (response.status === 400) {
      this.errorEmailExists = true;
    } else if (response.status === 201) {
      this.success = true;
      console.log(response.status);
    } else if (response.status === 404) {
      this.mailNotSended = true;
    } else {
      this.error = true;
    }
  }

}
