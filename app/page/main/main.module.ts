import {NgModule} from '@angular/core';
import {MainComponent} from "./main.component";
import {MainService} from "./main.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'main', component: MainComponent}
        ])
    ],
    exports: [],
    declarations: [
        MainComponent
    ],
    providers: [
        MainService
    ],
})
export class MainModule {
}
