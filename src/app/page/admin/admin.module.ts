import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {AdminUsersPipe} from './users/admin.users.filter';
import {AdminAuditService} from './audit/admin.audit.service';
import {AdminAuditComponent} from './audit/admin.audit.component';
import {AdminGuardService} from './admin.main.guard.service';
import {AdminDecksComponent} from './decks/admin.decks.component';
import {AdminDecksService} from './decks/admin.decks.service';
import {AdminDeckComponent} from './decks/deck/admin.deck.component';
import {AdminDeckService} from './decks/deck/admin.deck.service';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    StarRatingModule,
    RouterModule.forChild([
      {path: 'admin/audit', canActivate: [AdminGuardService], component: AdminAuditComponent},
      {path: 'admin/categories', canActivate: [AdminGuardService], component: AdminCategoryComponent},
      {path: 'admin/users', canActivate: [AdminGuardService], component: AdminUsersComponent},
      {path: 'admin/users/:url', canActivate: [AdminGuardService], component: AdminUserComponent},
      {path: 'admin/decks', canActivate: [AdminGuardService], component: AdminDecksComponent},
      {path: 'admin/decks/:url', canActivate: [AdminGuardService], component: AdminDeckComponent}
    ])],
  exports: [],
  declarations: [
    AdminCategoryPipe,
    AdminUsersPipe,
    AdminCategoryComponent,
    AdminUsersComponent,
    AdminUserComponent,
    AdminAuditComponent,
    AdminDecksComponent,
    AdminDeckComponent
  ],
  providers: [
    AdminCategoryService,
    AdminUsersService,
    AdminUserService,
    AdminAuditService,
    AdminGuardService,
    AdminDecksService,
    AdminDeckService

  ],
})

export class AdminModule {
}
