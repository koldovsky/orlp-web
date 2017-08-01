import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CardComponent} from "./card.component";
<<<<<<< HEAD
import {CardService} from "./card.service";
=======
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
<<<<<<< HEAD
            {path: 'cards/:url', component: CardComponent}
=======
            {path: 'card', component: CardComponent}
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
        ])
    ],
    exports: [],
    declarations: [
        CardComponent
    ],
<<<<<<< HEAD
    providers: [ CardService ],
=======
    providers: [],
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
})
export class CardModule { }
