import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {CabinetModule} from './page/cabinet/cabinet.module';
import {CategoryInfoModule} from './page/categoryInfo/categoryInfo.module';
import {SignUpModule} from './page/authorization/signup/signup.module';
import {HomeModule} from './page/home/home.module';
import {LoginModule} from './page/authorization/login/login.module';
import {AdminModule} from './page/admin/admin.module';
import {CardModule} from './page/card/card.module';
import {CookieService} from 'angular2-cookie/core';
import {ORLPService} from './services/orlp.service';
import {StarRatingModule} from 'angular-star-rating';
import {LogoutService} from './page/logout/logout.service';
import {CabinetService} from './page/cabinet/cabinet.service';
import {DeckService} from './page/main/search/deck.service';
import {DeckFilterPipe} from './page/main/search/deck.filter.pipe';
import {CategoryService} from './page/main/search/category.service';
import {CategoryFilterPipe} from './page/main/search/category.filter.pipe';
import {CourseService} from './page/main/search/course.service';
import {CourseFilterPipe} from './page/main/search/course.filter.pipe';
import {UserModule} from './page/user/user.module';
import {UserCategoriesService} from './page/user/categories/user.categories.service';
import {UserCoursesService} from './page/user/courses/user.courses.service';
import {CourseInfoModule} from './page/courseInfo/courseInfo.module';
import {MainService} from './page/main/main.service';
import {MainComponent} from './page/main/main.component';
import {ProfileModule} from './page/userProfile/profile.module';
import {ProfileService} from './page/userProfile/profile.service';
import {UserStatusChangeModule} from './page/userStatusChange/user.status.change.module';
import {UserStatusChangeService} from './page/userStatusChange/user.status.change.service';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {environment} from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),

    CategoryInfoModule,
    CourseInfoModule,
    SignUpModule,
    LoginModule,
    HomeModule,
    AdminModule,
    CardModule,
    CabinetModule,
    StarRatingModule,
    UserModule,
    ProfileModule,
    UserStatusChangeModule,
    LoggerModule.forRoot({serverLoggingUrl: 'http://localhost:8080/',
      level: environment.logger.level,
      serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  exports: [],
  declarations: [
    MainComponent,
    CategoryFilterPipe,
    CourseFilterPipe,
    DeckFilterPipe,
  ],

  providers: [ORLPService, CategoryService, CourseService, DeckService, CookieService,
    LogoutService, MainService, CabinetService, UserCategoriesService, UserCoursesService, ProfileService, UserStatusChangeService],
  bootstrap: [MainComponent]
})
export class AppModule {
}
