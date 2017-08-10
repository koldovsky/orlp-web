import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CabinetComponent} from './cabinet.component';
import {CabinetService} from './cabinet.service';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StarRatingModule,
    RouterModule.forChild([
      {path: 'user/cabinet', component: CabinetComponent}
    ])],
  exports: [],
  declarations: [CabinetComponent],
  providers: [CabinetService],
})

export class CabinetModule {
}
