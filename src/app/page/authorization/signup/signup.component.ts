import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {SignupService} from './signup.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../dto/User';
import {MessageDTO} from '../../../dto/MessageDTO';
import * as ORLPSettings from '../../../services/orlp.settings';
import {AuthService} from 'angular2-social-login';
import {AuthorizationService} from '../authorization.service';
import {ReCaptchaComponent} from 'angular2-recaptcha';
import {NGXLogger} from 'ngx-logger';
import {environment} from '../../../../environments/environment';

function passwordMatcher(c: AbstractControl) {
  const passwordControl = c.get('password');
  const confirmPassword = c.get('confirmPassword');
  if (passwordControl.value === confirmPassword.value) {
    return null;
  }
  return {'match': true};
}

@Component({
  templateUrl: ('./signup.component.html'),
  styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {
  @ViewChild(ReCaptchaComponent) captchaComponent: ReCaptchaComponent;
  responseMessage: MessageDTO = new MessageDTO();
  userForm: FormGroup;
  user: User = new User();
  mailNotSended: boolean;
  success: boolean;
  error: boolean;
  public userSignIn;
  errorEmailExists: boolean;
  siteKey = environment.SITE_KEY;
  captcha: string;
  NOT_FOUND = 404;
  CREATED = 201;
  SERVICE_UNAVAILABLE = 503;
  NAMES_MIN_LENGTH = 2;
  NAMES_MAX_LENGTH = 15;
  PASSWORD_MIN_LENGTH = 8;
  PASSWORD_MAX_LENGTH = 20;
  EMAIL_MIN_LENGTH = 6;
  EMAIL_MAX_LENGTH = 254;

  constructor(private router: Router,
              private signupService: SignupService,
              public auth: AuthService,
              private authorizationService: AuthorizationService,
              private formBuilder: FormBuilder,
              private logger: NGXLogger) {
  }

  ngOnInit() {
    const validators = [
      Validators.required,
      Validators.minLength(this.NAMES_MIN_LENGTH),
      Validators.maxLength(this.NAMES_MAX_LENGTH),
      Validators.pattern('[^`~!@#$%^&*()\\-_=\\+\\[\\]{};:\'\".>/?,<\|]*')
    ];
    this.userForm = this.formBuilder.group({
      firstName: ['', validators],
      lastName: ['', validators],
      email: ['', [
        Validators.required,
        Validators.minLength(this.EMAIL_MIN_LENGTH),
        Validators.maxLength(this.EMAIL_MAX_LENGTH),
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$')
      ]],
      passwordGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.minLength(this.PASSWORD_MIN_LENGTH),
          Validators.maxLength(this.PASSWORD_MAX_LENGTH)
        ]],
        confirmPassword: ['', [Validators.required]],
      }, {validator: passwordMatcher})
    });
  }

  signInGoogle(provider: string) {
    this.auth.login(provider).subscribe(
      (data) => {
        this.userSignIn = data;
        this.sendGoogleToken();
      }
    );
  }

  sendGoogleToken() {
    this.authorizationService.sendGoogleIdToken(this.userSignIn.idToken)
      .subscribe((response) => {
        this.success = true;
        this.authorizationService.emitIsAuthorizedChangeEvent(true);
        this.router.navigate(['main']);
      }, (error) => {
        this.processError(error);
      });
  }

  signInFacebook(provider: string) {
    this.auth.login(provider).subscribe(
      (data) => {
        this.userSignIn = data;
        this.sendFacebookToken();
      }
    );
  }

  sendFacebookToken() {
    this.authorizationService.sendFacebookToken(this.userSignIn.token)
      .subscribe((response) => {
        this.success = true;
        this.authorizationService.emitIsAuthorizedChangeEvent(true);
        this.router.navigate(['main']);
      }, (error) => {
        this.processError(error);
      });
  }

  register(): void {
      this.error = false;
      this.success = false;
      this.errorEmailExists = false;
      this.mailNotSended = false;
      this.transferingDataFromFormToUserObj();
      this.signupService.registerUser(this.user)
        .subscribe(() => {
            this.success = true;
          },
          (response) => {
            this.responseMessage = response.json();
            this.processError(response);
            this.captchaComponent.reset();
            this.captcha = null;
          });
  }

  transferingDataFromFormToUserObj() {
    this.user.account.password = this.userForm.value.passwordGroup.password;
    this.user.account.email = this.userForm.value.email;
    this.user.person.firstName = this.userForm.value.firstName;
    this.user.person.lastName = this.userForm.value.lastName;
  }

  handleCorrectCaptcha($event) {
    this.captcha = $event;
  }

  private processError(response) {
    this.logger.error(this.responseMessage.message);
    if (response.status === this.NOT_FOUND) {
      this.errorEmailExists = true;
    } else if (response.status === this.CREATED) {
      this.success = true;
    } else if (response.status === this.SERVICE_UNAVAILABLE) {
      this.success = true;
      this.mailNotSended = true;
    } else {
      this.error = true;
    }
  }

  validSignUp(): boolean {
    return this.userForm.valid && (this.captcha != null);
  }

}
