import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthorisedComponent} from './authorised.component';
import {Angular2SocialLoginModule} from 'angular2-social-login';
import {ReCaptchaModule} from 'angular2-recaptcha';
import {AuthorizationService} from '../authorization.service';
import {environment} from '../../../../environments/environment';
import {AuthorizationUserGuardService} from "../authorization.user.guard.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'authorised', component: AuthorisedComponent},
        ]),
    ],
    exports: [],
    declarations: [
      AuthorisedComponent
    ],
    providers: [AuthorizationUserGuardService],
})
export class AuthorisedModule {
    constructor() { }
}
Angular2SocialLoginModule.loadProvidersScripts(environment.providers);
