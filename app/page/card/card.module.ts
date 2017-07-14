import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CardComponent} from "./card.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'card', component: CardComponent}
        ])
    ],
    exports: [],
    declarations: [
        CardComponent
    ],
    providers: [],
})
export class CardModule { }
