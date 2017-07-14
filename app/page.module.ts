import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {CommonModule} from "@angular/common";
import {PageComponent} from "./page/page.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ORLPService} from "./orlp.service";

import {StartPageModule} from "./page/mainPage/startPage.module";
import {CategoryInfoModule} from "./page/catalogInfo/categoryInfo.module";
import {LoginModule} from "./page/login/login.module";
import {SignupModule} from "./page/signup/signup.module";
import {AdminModule} from "./page/admin/admin.module";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forRoot([
            {path: '', redirectTo: 'startPage', pathMatch: 'full'},
            {path: '**', redirectTo: 'startPage', pathMatch: 'full'}
        ]),

        CategoryInfoModule,
        LoginModule,
        StartPageModule,
        SignupModule,
        AdminModule
    ],
    exports: [],
    declarations: [
        PageComponent,
    ],

    providers: [ORLPService],
    bootstrap: [PageComponent]
})
export class PageModule {
}
