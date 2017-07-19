import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SignUpComponent} from "./signup.component";
import {RouterModule} from "@angular/router";
import {SignupService} from "./signup.service";
import {AccountVerificationComponent} from "./accountVerification/accountVerification.component";
import {AccountVerificationService} from "./accountVerification/accountVerification.service";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forRoot([
            {path: 'registr', component: SignUpComponent},
            {path: 'registrationConfirm', component: AccountVerificationComponent}
        ])
    ],
    exports: [],
    declarations: [
        SignUpComponent, AccountVerificationComponent
    ],
    providers: [
        SignupService, AccountVerificationService
    ],
})
export class SignUpModule {
}
