import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {CommonModule} from "@angular/common";
import {PageComponent} from "./page/page.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./page/login/login.component";
import {HttpModule} from "@angular/http";
import {SignUpComponent} from "./page/signup/signup.component";
import {ORLPService} from "./orlp.service";

import {SignupService} from "./page/signup/signup.service";
import {SignupAlertService} from "./page/signup/signup-alert.service";
import {AdminComponent} from "./page/admin/admin.component";
import {StartPageModule} from "./page/mainPage/startPage.module";
import {CategoryInfoModule} from "./page/catalogInfo/categoryInfo.module";
import {LoginService} from "./page/login/login.service";
import {LoginModule} from "./page/login/login.module";
import {SignupModule} from "./page/signup/signup.module";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forRoot([
            {path: 'admin', component: AdminComponent},
            {path: '', redirectTo: 'startPage', pathMatch: 'full'},
            {path: '**', redirectTo: 'startPage', pathMatch: 'full'}
        ]),

        CategoryInfoModule,
        LoginModule,
        StartPageModule,
        SignupModule
    ],
    exports: [],
    declarations: [
        PageComponent,
        AdminComponent
    ],

    providers: [ORLPService],
    bootstrap: [PageComponent]
})
export class PageModule {
}
