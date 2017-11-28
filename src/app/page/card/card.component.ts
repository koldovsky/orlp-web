import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardPublic} from '../../dto/CardsDTO/public.card.DTO';
import {CardService} from './card.service';
import {LogoutService} from '../logout/logout.service';

import '../categoryInfo/deck/deckLanguages';

@Component({
  templateUrl: ('./card.component.html'),
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public static deckId: number;
  public static synthax: String;

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
  public config;
  public answerConfig;
  public configSynthax: String;

  constructor(private route: ActivatedRoute,
              private cardService: CardService,
              private logoutService: LogoutService) {
  }

  ngOnInit() {
    this.converSynthax();
    this.config = {theme: 'xq-dark', mode: (this.configSynthax), lineWrapping : true};
    this.answerConfig = {readonly: true, theme: 'xq-dark', mode: (this.configSynthax), lineWrapping : true};
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
  converSynthax() {
    if (CardComponent.synthax === 'SQL') {
      this.configSynthax = 'text/x-mysql';
    } else if (CardComponent.synthax === 'JAVA') {
      this.configSynthax = 'text/x-java';
    } else if (CardComponent.synthax === 'C++') {
      this.configSynthax = 'text/x-c++src';
    } else if (CardComponent.synthax === 'C') {
      this.configSynthax = 'text/x-csrc';
    } else if (CardComponent.synthax === 'C#') {
      this.configSynthax = 'text/x-csharp';
    } else if (CardComponent.synthax === 'Scala') {
      this.configSynthax = 'text/x-scala';
    } else if (CardComponent.synthax === 'ObjectiveC') {
      this.configSynthax = 'text/x-objectivec';
    } else if (CardComponent.synthax === 'HTML') {
      this.configSynthax = 'text/html';
    } else if (CardComponent.synthax === 'TypeScript') {
      this.configSynthax = 'text/typescript';
    } else {
      this.configSynthax = CardComponent.synthax.toLowerCase();
    }
  }
}
