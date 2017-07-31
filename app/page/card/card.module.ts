import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CardComponent} from "./card.component";
import {CardService} from "./card.service";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'cards/:url', component: CardComponent}
        ])
    ],
    exports: [],
    declarations: [
        CardComponent
    ],
    providers: [ CardService ],
})
export class CardModule { }
