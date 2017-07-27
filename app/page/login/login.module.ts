import {NgModule} from "@angular/core";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {LoginService} from "./login.service";



@NgModule({
    imports: [
        HttpModule,
        ReCaptchaModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forRoot([
            {path: 'login', component: LoginComponent},
        ]),
    ],
    exports: [],
    declarations: [
        LoginComponent
        ],

    providers: [LoginService],

})
export class LoginModule {
}
<<<<<<< Updated upstream
=======

Angular2SocialLoginModule.loadProvidersScripts(providers);
>>>>>>> Stashed changes
