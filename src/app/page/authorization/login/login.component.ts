import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {AuthService} from 'angular2-social-login';
import {Router} from '@angular/router';
import {AccountVerificationService} from '../signup/accountVerification/accountVerification.service';
import {LoginAccount} from '../../../dto/LoginAccount';
import {ViewChild} from '@angular/core';
import {ReCaptchaComponent} from 'angular2-recaptcha';
import * as ORLPSettings from '../../../services/orlp.settings';
import {AuthorizationService} from '../authorization.service';

@Component({
  templateUrl: ('./login.component.html'),
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(ReCaptchaComponent) captchaComponent: ReCaptchaComponent;
  loginForm: FormGroup;
  success = false;
  error= false;
  wrongDetails = false;
  public user;
  verificationStat = false;
  account: LoginAccount;
  captcha: string;
  siteKey = ORLPSettings.SITE_KEY;
  isDeleted = false;
  isBlocked = false;
  isInactive = false;
  mailIsSent = false;
  mailIsNotSent = false;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              public auth: AuthService,
              private router: Router,
              private authorizationService: AuthorizationService,
              private accountVerify: AccountVerificationService,
              private ngZone: NgZone) {
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
      this.account = this.loginForm.value;
      this.account.captcha = this.captcha;
      this.loginService.signIn(this.account)
        .subscribe((response) => {
          this.getStatus();
        }, (error) => {
          console.log(error.json());
          this.processError(error);
          this.captchaComponent.reset();
          this.captcha = null;
        });
  }

  private getStatus() {
    this.loginService.getStatus()
      .subscribe((response) => {
        sessionStorage.setItem('status', 'ACTIVE');
        this.success = true;
        this.authorizationService.emitIsAuthorizedChangeEvent(true);
        this.router.navigate(['main']);
      }, (error) => {
        console.log(error.json());
        this.statusError(error);
        this.captchaComponent.reset();
        this.captcha = null;
      });
  }

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
    this.success = false;
    if (response.status === ORLPSettings.UNAUTHORIZED) {
      this.wrongDetails = true;
    } else {
      this.error = true;
    }
  }

// .subscribe((response) => {
//   this.ngZone.run(() => {
//   sessionStorage.setItem('status', 'ACTIVE');
// });
// }, (error) => {
//   if (error.status === ORLPSettings.LOCKED) {
//     sessionStorage.setItem('status', 'DELETED');
//   } else if (error.status === ORLPSettings.FORBIDDEN) {
//     sessionStorage.setItem('status', 'BLOCKED');
//   } else if (error.status === ORLPSettings.METHOD_NOT_ALLOWED) {
//     sessionStorage.setItem('status', 'INACTIVE');
//   } else {
//     sessionStorage.setItem('status', 'HHHHHHHHHH');
//   }
// });


  private statusError(response) {
    this.success = false;
    if (response.status === ORLPSettings.LOCKED) {
      this.isDeleted = true;
      sessionStorage.setItem('status', 'DELETED');
    } if (response.status === ORLPSettings.FORBIDDEN) {
      this.isBlocked = true;
      sessionStorage.setItem('status', 'BLOCKED');
    } if (response.status === ORLPSettings.METHOD_NOT_ALLOWED) {
      this.isInactive = true;
      sessionStorage.setItem('status', 'INACTIVE');
    }
  }

  signInGoogle(provider: string) {
    this.auth.login(provider).subscribe(
      (data) => {
        this.user = data;
        this.sendGoogleToken();
      }
    );
  }

  sendGoogleToken() {
    this.authorizationService.sendGoogleIdToken(this.user.idToken)
      .subscribe((response) =>  this.ngZone.run(() => {
        this.getStatus();
      }), (error) => {
        this.processError(error);
      });
  }

  signInFacebook(provider: string) {
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
        this.getStatus();
      }), (error) => {
        this.processError(error);
      });
  }

  handleCorrectCaptcha($event) {
    this.captcha = $event;
  }

  validLogin(): boolean {
    return this.loginForm.valid && (this.captcha != null);
  }
}
