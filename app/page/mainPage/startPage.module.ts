import { NgModule } from '@angular/core';
import {StartPageComponent} from "./startPage.component";
import {StartPageService} from "./startPage.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'startPage', component: StartPageComponent}
        ])
    ],
    exports: [],
    declarations: [
        StartPageComponent
    ],
    providers: [
        StartPageService
    ],
})
export class StartPageModule { }
