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
import {UserManageCardsComponent} from './userDecks/manageCards/user.manage.cards.component';
import {UserManageCardsService} from './userDecks/manageCards/user.manage.cards.service';
import {UserCreateCardsComponent} from './userDecks/manageCards/createCards/user.create.cards.component';
import {UserCreateCardsService} from './userDecks/manageCards/createCards/user.create.cards.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StarRatingModule,
    RouterModule.forChild([
      {path: 'user/cabinet', component: CabinetComponent},
      {path: 'user/cabinet/create/course', component: CourseComponent},
      {path: 'user/cabinet/manage/decks', component: UserDecksComponent},
      {path: 'user/cabinet/manage/cards/:url', component: UserManageCardsComponent},
      {path: 'user/cabinet/create/cards/:url', component: UserCreateCardsComponent}
    ])],
  exports: [],
  declarations: [CabinetComponent, CourseComponent, UserDecksComponent, UserManageCardsComponent, UserCreateCardsComponent],
  providers: [CabinetService, CourseService, UserDecksService, UserManageCardsService, UserCreateCardsService],
})

export class CabinetModule {
}
