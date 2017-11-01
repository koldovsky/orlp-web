import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserStatusChangeService} from './user.status.change.service';
import {UserStatusChangeComponent} from './user.status.change.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'user/status/change', component: UserStatusChangeComponent}
    ])],
  exports: [],
  declarations: [UserStatusChangeComponent],
  providers: [UserStatusChangeService]
})
export class UserStatusChangeModule {
}
