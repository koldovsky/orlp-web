import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CardPublic} from '../../dto/CardsDTO/public.card.DTO';
import {CardService} from './card.service';
import {UserCardQueuePublicDTO} from '../../dto/CardsDTO/UserCardQueuePublicDTO';
import * as ORLPSettings from '../../services/orlp.settings';
import {LogoutService} from '../logout/logout.service';
import {isType} from "@angular/core/src/type";

@Component({
  templateUrl: ('./card.component.html'),
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public static deckId: number;
  public routing = false;
  public questionNumber = 0;
  public maxQuantityCard;

  public answer = '';
  public url: string;
  public cards: CardPublic[];
  private isAuthorized: boolean;
  public areCardsEnded: boolean = false;
  public cardsEndedMessage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private cardService: CardService,
              private logoutService: LogoutService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.url = params['url'];
        this.getLearningCards(true);
      });

    this.isAuthorized = this.logoutService.isAuthorized();
  }

  onRotate() {
    this.routing = true;
  }

  onRotateBack() {
    if (this.questionNumber === this.maxQuantityCard - 1) {
      this.areCardsEnded = true;
    } else {
      this.questionNumber++;
      this.answer = '';
    }
    this.routing = false;
  }


  getLearningCards(isStart: boolean) {
    this.areCardsEnded = false;
    this.questionNumber = 0;
    this.cardService.areThereNotPostponedCards(CardComponent.deckId).subscribe(isPresent => {
      if (isPresent) {
        this.getCards();
        this.cardsEndedMessage = 'You have learned all the cards for today. Do you want to continue?';
      } else {
        this.areCardsEnded = isStart;
        this.getAdditionalCards();
        this.cardsEndedMessage = 'You have learned all the cards, so there is no need to continue learning cards in' +
          ' this deck. But if you want though, then you can continue learning with cards that are postponed for the' +
          ' future.';
      }
    });
  }

  getCards() {
    this.cardService.getCards(this.url).subscribe(
      cards => {
        this.cards = cards;
        this.maxQuantityCard = this.cards.length;
      }
    );
  }

  getAdditionalCards() {
    this.cardService.getAdditionalCards(CardComponent.deckId).subscribe(additionalCards => {
        this.cards = additionalCards;
        this.maxQuantityCard = additionalCards.length;
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
