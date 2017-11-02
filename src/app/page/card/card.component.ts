import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CardPublic} from '../../dto/CardsDTO/public.card.DTO';
import {CardService} from './card.service';
import {UserCardQueuePublicDTO} from '../../dto/CardsDTO/UserCardQueuePublicDTO';
import * as ORLPSettings from '../../services/orlp.settings';
import {LogoutService} from '../logout/logout.service';

@Component({
  templateUrl: ('./card.component.html'),
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public static deckId: number;
  public routing = false;
  public questionNumber = 0;
  public MAX_QUANTITY_CARD;

  public answer = '';
  public url: string;
  public cards: CardPublic[];
  private isAuthorized: boolean;
  public areCardsEnded: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cardService: CardService,
              private logoutService: LogoutService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.url = params['url'];
      }
    );
    this.isAuthorized = this.logoutService.isAuthorized();
    this.cardService.getCards(this.url).subscribe(
      cards => {
        this.cards = cards;
        this.MAX_QUANTITY_CARD = this.cards.length;
      }
    );
  }

  onRotate() {
    this.routing = true;
  }

  onRotateBack() {
    if (this.questionNumber  === this.MAX_QUANTITY_CARD - 1) {
      this.areCardsEnded = true;
    } else {
      this.routing = false;
      this.questionNumber++;
      this.answer = '';
    }
  }

  getAdditionalCards() {
    this.areCardsEnded = false;
    this.cardService.getAdditionalCards(CardComponent.deckId).subscribe(additionalCards => {
      console.log(additionalCards);
        this.cards = additionalCards;
        this.questionNumber = 0;
        this.MAX_QUANTITY_CARD = additionalCards.length;
      }
    );
  }

  sendStatus(status: string) {
    if (this.isAuthorized) {
      this.cardService.sendStatus(status, this.cards[this.questionNumber].cardId, CardComponent.deckId).subscribe();
    }
    this.onRotateBack();
  }
}
