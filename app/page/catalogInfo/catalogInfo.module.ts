import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CatalogInfoComponent} from "./catalogInfo.component";
import {ORLPService} from "../../orlp.service";
import {DeckComponent} from "./deck/deck.component";
import {CourseComponent} from "./course/course.component";
import {CourseService} from "./course/course.service";
import {DeckService} from "./deck/deck.service";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'catalog/:id', component: CatalogInfoComponent}
        ])],
    exports: [],
    declarations: [
        CatalogInfoComponent,
        CourseComponent,
        DeckComponent ],
    providers: [
        CourseService,
        DeckService
    ],
})

export class CatalogInfoModule { }
