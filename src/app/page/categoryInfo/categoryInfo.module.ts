import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DeckComponent} from './deck/deck.component';
import {CourseComponent} from './course/course.component';
import {CourseService} from './course/course.service';
import {DeckService} from './deck/deck.service';
import {CategoryInfoComponent} from './categoryInfo.component';
import {CategoryInfoService} from './categoryInfo.service';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        StarRatingModule,
        RouterModule.forChild([
            {path: 'category/:url', component: CategoryInfoComponent},
            {path: 'course/:url', component: CourseComponent}
        ])],
    exports: [],
    declarations: [
        CategoryInfoComponent,
        CourseComponent,
        DeckComponent],
    providers: [
        CourseService,
        DeckService,
        CategoryInfoService
    ],
})
export class CategoryInfoModule {
}
