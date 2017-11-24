import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CreatePasswordService} from './createPassword.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NewPasswordDTO} from "../../../../dto/UsersDTO/NewPasswordDTO";

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
  newPassword: string;
  private sub: Subscription;
  token: string;
  public myTemplate: any;
  public showTemplate = false;
  PASSWORD_MIN_LENGTH = 8;
  PASSWORD_MAX_LENGTH = 20;
  passwordForm: FormGroup;

  constructor(private createPasswordService: CreatePasswordService, private router: Router,
              private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
      this.email = params['email'];
    });
    this.createPasswordService.tokenVerification(this.token).subscribe((success) => {
    this.showTemplate = true;
        /*var emails = this.email;
        this.router.navigate(['restorePassword']);*/
      },
      (error) => {
        this.router.navigate(['login']);
      });
    this.passwordForm = this.formBuilder.group({
      password: ['', [
        Validators.required,
        Validators.minLength(this.PASSWORD_MIN_LENGTH),
        Validators.maxLength(this.PASSWORD_MAX_LENGTH)
      ]],
      confirmPassword: ['', [Validators.required]],
    }, {validator: passwordMatcher});
  }

  private changePassword() {
    this.newPassword = this.passwordForm.value.password;
    this.createPasswordService.changePassword(new NewPasswordDTO(this.email, '1111111111'))
      .subscribe(() => {
      }, (error) => {
      });
  }

  validResetPasswordForm(): boolean {
    return this.passwordForm.valid;
  }
}
