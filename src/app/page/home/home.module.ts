import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeService} from './home.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    StarRatingModule,
    RouterModule.forChild([
      {path: 'home', component: HomeComponent}
    ]),
  ],
  exports: [],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeService
  ],
})
export class HomeModule {
}
