import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardPublic} from '../../dto/CardsDTO/public.card.DTO';
import {CardService} from './card.service';
import '../categoryInfo/deck/deckLanguages';
import {IStarRatingOnClickEvent} from 'angular-star-rating';
import {Rating} from '../../dto/Rating';
import {UserStatusChangeService} from '../userStatusChange/user.status.change.service';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  templateUrl: ('./card.component.html'),
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public static deckId: number;
  public static synthax: String;

  public routing = false;
  public questionNumber;
  public maxQuantityCard;

  public answer = '';
  public url: string;
  public cards: CardPublic[];
  public areCardsEnded = false;
  public isShowRating = false;
  public cardsEndedMessage: string;
  public badStatusMark: number;
  public normalStatusMark: number;
  public goodStatusMark: number;
  public config;
  public answerConfig;
  public configSynthax: String;
  private isAuthorized: boolean;
  private isAuthenticated: boolean;
  private cardTitle: string;

  constructor(private route: ActivatedRoute,
              private cardService: CardService,
              private userStatusChangeService: UserStatusChangeService,
              private authentication: AuthenticationService) {
  }

  ngOnInit() {
    this.questionNumber = 0;
    this.converSynthax();
    this.config = {theme: 'xq-dark', mode: (this.configSynthax), lineWrapping: true};
    this.answerConfig = {readonly: true, theme: 'xq-dark', mode: (this.configSynthax), lineWrapping: true};
    this.isAuthenticated = this.authentication.isAuthenticated();
    if (this.isAuthenticated === true) {
      this.isAuthorized = true;
    }
    this.route.params.subscribe(
      params => {
        this.url = params['url'];
        this.getLearningCards(true);
      });
    this.badStatusMark = 0;
    this.normalStatusMark = 0;
    this.goodStatusMark = 0;
  }

  onRotate() {
    this.routing = true;
    this.setRatingTitle();
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
    if (this.isAuthorized) {
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
    } else {
      this.getCards();
    }
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
    }
  }

  onCardRatingClick = (card: CardPublic, event: IStarRatingOnClickEvent) => {
    this.cardTitle = 'You gave this card ' + event.rating + ' stars';
    const cardRating: Rating = new Rating(event.rating);
    this.cardService.addCardRating(cardRating, card.cardId).subscribe(() => {
      card.rating = event.rating;
    }, (error) => {
      this.userStatusChangeService.handleUserStatusError(error.status);
    });
  };

  setRatingTitle(): void {
    if (this.isAuthorized) {
      if (this.cards[this.questionNumber].rating > 0) {
        this.cardTitle = 'Average rating';
      } else {
        this.cardTitle = 'Looks like nobody has rated this card yet';
      }
    } else {
      this.cardTitle = 'Login to rate card';
    }
  }
}
