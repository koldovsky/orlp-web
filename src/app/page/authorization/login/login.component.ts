import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {AuthService} from 'angular2-social-login';
import {Router} from '@angular/router';
import {AccountVerificationService} from '../signup/accountVerification/accountVerification.service';
import {LoginAccount} from '../../../dto/LoginAccount';
import {ReCaptchaComponent} from 'angular2-recaptcha';
import * as ORLPSettings from '../../../services/orlp.settings';
import {AuthorizationService} from '../authorization.service';
import {NGXLogger} from 'ngx-logger';
import {environment} from '../../../../environments/environment';

@Component({
  templateUrl: ('./login.component.html'),
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(ReCaptchaComponent) captchaComponent: ReCaptchaComponent;
  loginForm: FormGroup;
  success = false;
  error = false;
  wrongDetails = false;
  public user;
  verificationStat = false;
  account: LoginAccount;
  captcha: string;
  siteKey = environment.SITE_KEY;
  isStatusInvalid = false;
  isInactive = false;
  mailIsSent = false;
  mailIsNotSent = false;
  statusError:string;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              public auth: AuthService,
              private router: Router,
              private authorizationService: AuthorizationService,
              private accountVerify: AccountVerificationService,
              private ngZone: NgZone,
              private logger: NGXLogger) {
  }

  ngOnInit() {
    this.accountVerify.getMessage().subscribe(verifStatus => {
      this.verificationStat = verifStatus;
    });
    this.loginForm = this.fb.group({
      password: ['', [Validators.required]],
      username: ['', [Validators.required]],
    });
  }

  login = () => {
    this.success = false;
    this.error = false;
    this.wrongDetails = false;
    this.verificationStat = false;
    this.account = this.loginForm.value;
    this.account.captcha = this.captcha;
    this.loginService.signIn(this.account)
      .subscribe((response) => {
        this.success = true;
        sessionStorage.setItem('status', 'ACTIVE');
        this.authorizationService.emitIsAuthorizedChangeEvent(true);
        this.router.navigate(['main']);
      }, (error => {
        this.processError(error);
      }));
  };


  private sendMail() {
    this.loginService.sendMail()
      .subscribe(() => {
        this.isInactive = false;
        this.mailIsSent = true;
      }, (error) => {
        this.mailIsNotSent = true;
      });
  }

  private processError(response) {
    this.captchaComponent.reset();
    this.captcha = null;
    this.success = false;
    if (response.status === ORLPSettings.UNAUTHORIZED) {
      this.wrongDetails = true;
    } else if (response.status === ORLPSettings.LOCKED) {
        this.statusError = response.json().message;
      this.isStatusInvalid = true;
    } else if (response.status === ORLPSettings.METHOD_NOT_ALLOWED) {
      this.isInactive = true;
    } else {
      this.error = true;
    }
  }


  signInGoogle(provider: string) {
    this.verificationStat  = false;
    this.auth.login(provider).subscribe(
      (data) => {
        this.user = data;
        this.sendGoogleToken();
      }
    );
  }

  sendGoogleToken() {
    this.authorizationService.sendGoogleIdToken(this.user.idToken)
      .subscribe((response) => this.ngZone.run(() => {
        this.success = true;
        sessionStorage.setItem('status', 'ACTIVE');
        this.authorizationService.emitIsAuthorizedChangeEvent(true);
        this.router.navigate(['main']);
      }), (error) => this.ngZone.run(() => {
        this.processError(error);
      }));
  }

  signInFacebook(provider: string) {
    this.verificationStat = false;
    this.auth.login(provider).subscribe(
      (data) => {
        this.user = data;
        this.sendFacebookToken();
      }
    );
  }

  sendFacebookToken() {
    this.authorizationService.sendFacebookToken(this.user.token)
      .subscribe((response) => this.ngZone.run(() => {
      }), (error) => this.ngZone.run(() => {
        this.processError(error);
      }));
  }

  handleCorrectCaptcha($event) {
    this.captcha = $event;
  }

  validLogin(): boolean {
    return this.loginForm.valid && (this.captcha != null);
  }
}
