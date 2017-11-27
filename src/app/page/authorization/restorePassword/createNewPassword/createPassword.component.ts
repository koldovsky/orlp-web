import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {CreatePasswordService} from './createPassword.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NewPasswordDTO} from '../../../../dto/UsersDTO/NewPasswordDTO';

function passwordMatcher(c: AbstractControl) {
  const passwordControl = c.get('password');
  const confirmPassword = c.get('confirmPassword');
  if (passwordControl.value === confirmPassword.value) {
    return null;
  }
  return {'match': true};
}

@Component({
  templateUrl: ('./createPassword.component.html'),
  styleUrls: ['./createPassword.component.css']
})

export class CreatePasswordComponent implements OnInit {
  public email: string;
  public newPassword: string;
  public token: string;
  public showTemplate = false;
  public passwordMinLength = 8;
  public passwordMaxLength = 20;
  public passwordForm: FormGroup;
  public isTokenValid = true;
  public isPasswordChanged = false;
  public isPasswordNotChanged = false;

  constructor(private createPasswordService: CreatePasswordService, private router: Router,
              private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
    });
    this.createPasswordService.tokenVerification(this.token).subscribe((email) => {
        if (email === '') {
          this.isTokenValid = false;
        } else {
          this.email = email;
          this.showTemplate = true;
        }
      },
      (error) => {
        this.router.navigate(['login']);
      });
    this.passwordForm = this.formBuilder.group({
      password: ['', [
        Validators.required,
        Validators.minLength(this.passwordMinLength),
        Validators.maxLength(this.passwordMaxLength)
      ]],
      confirmPassword: ['', [Validators.required]],
    }, {validator: passwordMatcher});
  }

   changePassword() {
    this.newPassword = this.passwordForm.value.password;
    this.createPasswordService.changePassword(new NewPasswordDTO(this.email, this.newPassword))
      .subscribe(() => {
        this.showTemplate = false;
        this.isPasswordNotChanged = false;
        this.isPasswordChanged = true;
      }, (error) => {
        this.showTemplate = false;
        this.isPasswordChanged = false;
        this.isPasswordNotChanged = true;
      });
  }

  isResetPasswordFormValid(): boolean {
    return this.passwordForm.valid;
  }
}
