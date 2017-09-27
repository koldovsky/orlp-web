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
import {AdminUsersPipe} from './users/admin.users.filter';
import {AdminAuditService} from './audit/admin.audit.service';
import {AdminAuditComponent} from './audit/admin.audit.component';
import {AdminGuardService} from './admin.main.guard.service';
import {AdminDecksComponent} from './decks/admin.decks.component';
import {AdminDecksService} from './decks/admin.decks.service';
import {AdminDeckComponent} from './decks/deck/admin.deck.component';
import {AdminDeckService} from './decks/deck/admin.deck.service';
import {AdminCardsComponent} from './decks/deck/manageCards/createCards/admin.cards.component';
import {AdminCardsService} from './decks/deck/manageCards/createCards/admin.cards.service';
import {AdminManageCardsComponent} from './decks/deck/manageCards/admin.manage.cards.component';
import {AdminManageCardsService} from './decks/deck/manageCards/admin.manage.cards.service';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'admin/audit', canActivate: [AdminGuardService], component: AdminAuditComponent},
      {path: 'admin/categories', canActivate: [AdminGuardService], component: AdminCategoryComponent},
      {path: 'admin/users', canActivate: [AdminGuardService], component: AdminUsersComponent},
      {path: 'admin/users/:url', canActivate: [AdminGuardService], component: AdminUserComponent},
      {path: 'admin/decks', canActivate: [AdminGuardService], component: AdminDecksComponent},
      {path: 'admin/decks/:url', canActivate: [AdminGuardService], component: AdminDeckComponent},
      {path: 'admin/manage/cards/:url', canActivate: [AdminGuardService], component: AdminManageCardsComponent},
      {path: 'admin/cards/:url', canActivate: [AdminGuardService], component: AdminCardsComponent}
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
    AdminDeckComponent,
    AdminCardsComponent,
    AdminManageCardsComponent
  ],
  providers: [
    AdminCategoryService,
    AdminUsersService,
    AdminUserService,
    AdminAuditService,
    AdminGuardService,
    AdminDecksService,
    AdminDeckService,
    AdminCardsService,
    AdminManageCardsService
  ],
})

export class AdminModule {
}
