import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminCategoryComponent} from './categories/admin.category.component';
import {AdminCategoryPipe} from './categories/admin.category.filter.pipe';
import {AdminCategoryService} from './categories/admin.category.service';
import {AdminUsersComponent} from './users/admin.users.component';
import {AdminUsersService} from './users/admin.users.service';
import {AdminUserComponent} from './users/user/admin.user.component';
import {AdminUserService} from './users/user/admin.user.service';

import {AdminMainComponent} from './admin.main.component';
import {AdminUsersPipe} from './users/admin.users.filter';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'admin', component: AdminMainComponent},
      {path: 'admin/categories', component: AdminCategoryComponent},
      {path: 'admin/users', component: AdminUsersComponent},
      {path: 'admin/users/:url', component: AdminUserComponent}
    ])],
  exports: [],
  declarations: [
    AdminCategoryPipe,
    AdminUsersPipe,
    AdminCategoryComponent,
    AdminUsersComponent,
    AdminMainComponent,
    AdminUserComponent
  ],
  providers: [
    AdminCategoryService,
    AdminUsersService,
    AdminUserService,
  ],
})

export class AdminModule {
}
