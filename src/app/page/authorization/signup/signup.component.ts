import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {SignupService} from "./signup.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../dto/User";
import {MessageDTO} from "../../../dto/MessageDTO";
import * as ORLPSettings from '../../../services/orlp.settings';
import {AuthService} from "angular2-social-login";
import {AuthorizationService} from "../authorization.service";
import { ReCaptchaComponent } from 'angular2-recaptcha';

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
  responseMessage: MessageDTO = new MessageDTO();
  userForm: FormGroup;
  user: User = new User();
  mailNotSended: boolean;
  success: boolean;
  error: boolean;
  public userSignIn;
  errorEmailExists: boolean;
  siteKey = ORLPSettings.SITE_KEY;
  captcha: string;

  constructor(private router: Router,
              private signupService: SignupService,
              public auth: AuthService,
              private authorizationService: AuthorizationService,
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

  signInGoogle(provider: string) {
    this.auth.login(provider).subscribe(
      (data) => {
        this.userSignIn = data;
        console.log(this.userSignIn.idToken);
        console.log(this.userSignIn.email);
        this.sendGoogleToken();
      }
    )
  }

  sendGoogleToken() {
    this.authorizationService.sendGoogleIdToken(this.userSignIn.idToken)
      .subscribe((response) => {
        this.success = true;
        this.router.navigate(['main']);
        this.reload();
      }, (error) => {
        this.processError(error);
      });
  }
  signInFacebook(provider: string) {
    this.auth.login(provider).subscribe(
      (data) => {
        this.userSignIn = data;
        console.log(this.userSignIn.token);
        console.log(this.userSignIn.email);
        this.sendFacebookToken();
      }
    )
  }

  sendFacebookToken() {
    this.authorizationService.sendFacebookToken(this.userSignIn.token)
      .subscribe((response) => {
        this.success = true;
        this.router.navigate(['main']);
        this.reload();
      }, (error) => {
        this.processError(error);
      });
  }

  reload() {
    window.location.reload();
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
        (response) => {
          this.responseMessage = response.json();
          this.processError(response)
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
    console.log(this.responseMessage.message);
    if (response.status === 404 && this.responseMessage.message === 'Email exists') {
      this.errorEmailExists = true;
    } else if (response.status === 201) {
      this.success = true;
      console.log(response.status);
    } else if (response.status === 503 && this.responseMessage.message === 'Mail not sent') {
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
