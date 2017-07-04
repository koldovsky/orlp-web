import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {CommonModule} from "@angular/common";
import {PageComponent} from "./page/page.component";
import {StartPageComponent} from "./page/mainPage/startPage.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./page/login/login.component";
import {HttpModule} from "@angular/http";
import {StartPageService} from "./page/mainPage/startPage.service";
import {CatalogInfoComponent} from "./page/catalogInfo/catalogInfo.component";
import {SignUpComponent} from "./page/signup/signup.component";
import {Table1Component} from "./page/catalogInfo/table1.component";
import {ORLPService} from "./orlp.service";

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, CommonModule,
              RouterModule.forRoot([
                  {path: 'mainPage', component: StartPageComponent},
                  {path: 'login', component: LoginComponent},
                  {path: 'registr', component: SignUpComponent},
                  {path: 'catalog/:id', component: CatalogInfoComponent},
                  {path: '', redirectTo: 'mainPage', pathMatch: 'full'},
                  {path: '**', redirectTo: 'mainPage', pathMatch: 'full'}
              ])],
    exports: [],
    declarations: [ PageComponent,
        StartPageComponent,
        LoginComponent,
        CatalogInfoComponent,
        SignUpComponent,
        Table1Component ],
    providers: [StartPageService, ORLPService],
    bootstrap: [PageComponent]
})
export class PageModule { }
