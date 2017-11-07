import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginService} from './login.service';
import {LoginComponent} from './login.component';
import {Angular2SocialLoginModule} from 'angular2-social-login';
import {ReCaptchaModule} from 'angular2-recaptcha';
import {AuthorizationService} from '../authorization.service';
import {environment} from '../../../../environments/environment';

@NgModule({
    imports: [
        HttpModule,
        ReCaptchaModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        Angular2SocialLoginModule,
        RouterModule.forRoot([
            {path: 'login', component: LoginComponent},
        ]),
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [LoginService, AuthorizationService],
})
export class LoginModule {
    constructor() { }
}
Angular2SocialLoginModule.loadProvidersScripts(environment.providers);
