import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SignUpComponent} from "./signup.component";
import {RouterModule} from "@angular/router";
import {SignupService} from "./signup.service";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forRoot([
            {path: 'registr', component: SignUpComponent}
        ])
    ],
    exports: [],
    declarations: [
        SignUpComponent
    ],
    providers: [
        SignupService,
    ],
})
export class SignUpModule { }
