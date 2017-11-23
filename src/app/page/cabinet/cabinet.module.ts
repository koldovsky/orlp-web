import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CabinetComponent} from './cabinet.component';
import {CabinetService} from './cabinet.service';
import {StarRatingModule} from 'angular-star-rating';
import {CourseComponent} from './createCourse/course.component';
import {CourseService} from './createCourse/course.service';
import {UserDecksComponent} from './userDecks/user.decks.component';
import {UserDecksService} from './userDecks/user.decks.service';
import {UserGuardService} from '../user/user.guard.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StarRatingModule,
    RouterModule.forChild([
      {path: 'user/cabinet', canActivate: [UserGuardService] , component: CabinetComponent},
      {path: 'user/cabinet/create/course', canActivate: [UserGuardService] , component: CourseComponent},
      {path: 'user/cabinet/manage/decks', canActivate: [UserGuardService] , component: UserDecksComponent},
    ])],
  exports: [],
  declarations: [CabinetComponent, CourseComponent, UserDecksComponent],
  providers: [CabinetService, CourseService, UserDecksService],
})

export class CabinetModule {
}
