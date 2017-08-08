import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeService} from './home.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'home', component: HomeComponent}
        ])
    ],
    exports: [],
    declarations: [
        HomeComponent
    ],
    providers: [
        HomeService
    ],
})
export class HomeModule {
}
