import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {DeckComponent} from "./deck/deck.component";
import {CourseComponent} from "./course/course.component";
import {CourseService} from "./course/course.service";
import {DeckService} from "./deck/deck.service";
import {CategoryInfoComponent} from "./categoryInfo.component";
import {CategoryInfoService} from "./categoryInfo.service";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'category/:url', component: CategoryInfoComponent}
        ])],
    exports: [],
    declarations: [
        CategoryInfoComponent,
        CourseComponent,
        DeckComponent ],
    providers: [
        CourseService,
        DeckService,
        CategoryInfoService
    ],
})
export class CategoryInfoModule { }
