import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CardComponent} from './card.component';
import {CardService} from './card.service';
import {CreateCardsComponent} from './manageCards/createCards/create.cards.component';
import {ManageCardsComponent} from './manageCards/manage.cards.component';
import {CreateCardsService} from './manageCards/createCards/create.cards.service';
import {ManageCardsService} from './manageCards/manage.cards.service';
import { CodemirrorModule } from 'ng2-codemirror';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'cards/:url', component: CardComponent},
      {path: 'manage/cards/:url/:nameOfPageToBack', component: ManageCardsComponent},
      {path: 'create/cards/:url/:nameOfPageToBack', component: CreateCardsComponent}
    ]),
    CodemirrorModule,
    StarRatingModule
  ],
  exports: [],
  declarations: [
    CardComponent,
    CreateCardsComponent,
    ManageCardsComponent
  ],
  providers: [
    CardService,
    CreateCardsService,
    ManageCardsService],
})
export class CardModule {
}
