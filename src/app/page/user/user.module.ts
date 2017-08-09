import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserCategoriesComponent} from './categories/user.categories.component';
import {UserCategoriesService} from './categories/user.categories.service';
import {UserCoursesComponent} from './courses/user.courses.component';
import {UserCoursesService} from './courses/user.courses.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'user/categories', component: UserCategoriesComponent},
      {path: 'user/courses', component: UserCoursesComponent}
    ])],
  declarations: [
    UserCoursesComponent,
    UserCategoriesComponent
  ],
  providers: [
    UserCategoriesService,
    UserCoursesService
  ]
})
export class UserModule {
}
