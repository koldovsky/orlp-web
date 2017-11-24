import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardPublic} from '../../dto/CardsDTO/public.card.DTO';
import {CardService} from './card.service';
import {LogoutService} from '../logout/logout.service';

import 'codemirror/mode/clike/clike';
import {DeckSynthaxDTO} from '../../dto/DeckDTO/deckSynthaxDTO';

@Component({
  templateUrl: ('./card.component.html'),
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public static deckId: number;
  public static synthax: string;

  public routing = false;
  public questionNumber = 0;
  public maxQuantityCard;

  public answer = '';
  public url: string;
  public cards: CardPublic[];
  private isAuthorized: boolean;
  public areCardsEnded = false;
  public isShowRating = false;
  public cardsEndedMessage: string;
  public badStatusMark: number;
  public normalStatusMark: number;
  public goodStatusMark: number;

  constructor(private route: ActivatedRoute,
              private cardService: CardService,
              private logoutService: LogoutService) {
  }

  ngOnInit() {
   this.route.params.subscribe(
      params => {
        this.url = params['url'];
        this.getLearningCards(true);
      });
    this.badStatusMark = 0;
    this.normalStatusMark = 0;
    this.goodStatusMark = 0;
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
    this.isShowRating = true;
    this.areCardsEnded = false;
    this.questionNumber = 0;
    this.cardService.areThereNotPostponedCards(CardComponent.deckId).subscribe(isPresent => {
      this.badStatusMark = 0;
      this.normalStatusMark = 0;
      this.goodStatusMark = 0;
      if (isPresent) {
        this.getCards();
        this.cardsEndedMessage = 'You have learned all the cards for today. Do you want to continue?';
      } else {
        this.areCardsEnded = isStart;
        this.isShowRating = !isStart;
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
        console.log('card ' + this.cards[0].question);
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
    this.evaluationCards(status);
  }

  evaluationCards(status: string) {
    if (status === 'BAD') {
      this.badStatusMark++;
    } else if (status === 'NORMAL') {
      this.normalStatusMark++;
    } else if (status === 'GOOD') {
      this.goodStatusMark++;
    }
  }
}
