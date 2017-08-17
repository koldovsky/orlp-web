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
import {AdminAuditService} from './audit/admin.audit.service';
import {AdminAuditComponent} from './audit/admin.audit.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'admin', component: AdminMainComponent},
      {path: 'admin/audit', component: AdminAuditComponent},
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
    AdminUserComponent,
    AdminAuditComponent
  ],
  providers: [
    AdminCategoryService,
    AdminUsersService,
    AdminUserService,
    AdminAuditService,
  ],
})

export class AdminModule {
}
