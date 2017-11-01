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
  public MAX_QUANTITY_CARD = ORLPSettings.MAX_QUANTITY_CARD;

  public answer = '';
  public url: string;
  public cards: CardPublic[];
  private isAuthorized: boolean;

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
      }
    );
  }

  onRotate() {
    this.routing = true;
  }

  onRotateBack() {
    this.routing = false;
    this.getNextQuestion();
    this.answer = '';
  }

  getNextQuestion() {
    this.questionNumber++;

    if (this.cards[this.questionNumber] === undefined || this.questionNumber === this.MAX_QUANTITY_CARD) {
      alert('The deck is over');
      this.router.navigate(['/main']);
    }
  }

  sendStatus(status: string) {
    if (this.isAuthorized) {
      this.cardService.sendStatus(status, this.cards[this.questionNumber].cardId, CardComponent.deckId).subscribe();
    }
    this.onRotateBack();
  }
}
