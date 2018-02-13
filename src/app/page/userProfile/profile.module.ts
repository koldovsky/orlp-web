import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {ProfileService} from './profile.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'profile', component: ProfileComponent}
    ])],
  exports: [],
  declarations: [ProfileComponent],
  providers: [ProfileService]
})
export class ProfileModule {
}
