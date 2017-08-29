import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CabinetComponent} from './cabinet.component';
import {CabinetService} from './cabinet.service';
import {StarRatingModule} from 'angular-star-rating';
import {CourseComponent} from './createCourse/course.component';
import {CourseService} from './createCourse/course.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StarRatingModule,
    RouterModule.forChild([
      {path: 'user/cabinet', component: CabinetComponent},
      {path: 'user/cabinet/create/course', component: CourseComponent}
    ])],
  exports: [],
  declarations: [CabinetComponent, CourseComponent],
  providers: [CabinetService, CourseService],
})

export class CabinetModule {
}
