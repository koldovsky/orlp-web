
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {SignUpComponent} from "./signup.component";
import {SignupService} from "./signup.service";
import {AccountVerificationComponent} from "./accountVerification/accountVerification.component";

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forRoot([
            {path: 'registr', component: SignUpComponent},
            {path: 'registrationConfirm', component: AccountVerificationComponent},

        ]),
    ],
    exports: [],
    declarations: [
        SignUpComponent, AccountVerificationComponent],

    providers: [SignupService],
})
export class SignUpModule {
}
