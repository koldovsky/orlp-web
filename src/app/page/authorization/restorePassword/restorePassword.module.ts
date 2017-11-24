import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RestorePasswordComponent} from './restorePassword.component';
import {RestorePasswordService} from './restorePassword.service';
import {NgModule} from '@angular/core';
import {CreatePasswordService} from './createNewPassword/createPassword.service';
import {CreatePasswordComponent} from './createNewPassword/createPassword.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'api/reset/password', component: RestorePasswordComponent},
      {path: 'restorePassword', component: CreatePasswordComponent}
    ])
  ],
  exports: [],
  declarations: [
    RestorePasswordComponent, CreatePasswordComponent],
  providers: [
    RestorePasswordService, CreatePasswordService],
})
export class RestorePasswordModule {
}
