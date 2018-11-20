import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserCategoriesComponent} from './categories/user.categories.component';
import {UserCategoriesService} from './categories/user.categories.service';
import {UserCoursesComponent} from './courses/user.courses.component';
import {UserCoursesService} from './courses/user.courses.service';
import {UserGuardService} from './user.guard.service';
import {ProfileComponent} from '../userProfile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'user/categories', component: UserCategoriesComponent},
      {path: 'user/courses', component: UserCoursesComponent},
      {path: 'user/profile', canActivate: [UserGuardService] , component: ProfileComponent},
    ])],
  declarations: [
    UserCoursesComponent,
    UserCategoriesComponent
  ],
  providers: [
    UserCategoriesService,
    UserCoursesService,
    UserGuardService
  ]
})
export class UserModule {
}
