import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {CommonModule} from "@angular/common";
import {PageComponent} from "./page/navbar.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ORLPService} from "./orlp.service";
import {MainModule} from "./page/main/main.module";
import {SignUpModule} from "./page/signup/signup.module";
import {AdminModule} from "./page/admin/admin.module";
import {CardModule} from "./page/card/card.module";
import {LoginModule} from "./page/login/login.module";
import {CategoryInfoModule} from "./page/categoryInfo/categoryInfo.module";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forRoot([
            // {path: 'admin', component: AdminComponent},
            {path: '', redirectTo: 'main', pathMatch: 'full'},
            {path: '**', redirectTo: 'main', pathMatch: 'full'}
        ]),

        CategoryInfoModule,
        MainModule,
        SignUpModule,
        LoginModule,
        MainModule,
        AdminModule,
        CardModule
    ],
    exports: [],
    declarations: [
        PageComponent,
        /*AdminComponent*/],


    providers: [ORLPService],
    bootstrap: [PageComponent, ]
})
export class PageModule {
}
