import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {StarRatingModule} from "angular-star-rating";
import {CourseInfoService} from "./courseInfo.service";
import {CourseInfoComponent} from "./courseInfo.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        StarRatingModule,
        RouterModule.forChild([
            {path: 'course/top/:url', component: CourseInfoComponent}
        ])],
    exports: [],
    declarations: [
        CourseInfoComponent],
    providers: [CourseInfoService],
})
export class CourseInfoModule {
}
