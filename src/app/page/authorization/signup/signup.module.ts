import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from './signup.component';
import {RouterModule} from '@angular/router';
import {SignupService} from './signup.service';
import {AccountVerificationComponent} from './accountVerification/accountVerification.component';
import {AccountVerificationService} from './accountVerification/accountVerification.service';
import {ReCaptchaModule} from 'angular2-recaptcha';
import {AuthorizationService} from '../authorization.service';
import {AuthorizationUserGuardService} from '../authorization.user.guard.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ReCaptchaModule,
    CommonModule,
    RouterModule.forRoot([
      {path: 'register', canActivate: [AuthorizationUserGuardService], component: SignUpComponent},
      {path: 'registrationConfirm', component: AccountVerificationComponent}
    ])
  ],
  exports: [],
  declarations: [
    SignUpComponent, AccountVerificationComponent
  ],
  providers: [
    SignupService, AccountVerificationService, AuthorizationService
  ],
})
export class SignUpModule {
}
