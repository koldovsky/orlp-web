import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ORLPService} from '../../services/orlp.service';
import {CardPublic} from '../../dto/CardsDTO/public.card.DTO';
import {CardService} from './card.service';
import {UserCardQueuePublicDTO} from '../../dto/CardsDTO/UserCardQueuePublicDTO';

@Component({
  templateUrl: ('./card.component.html'),
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public routing = false;
  public questionNumber = 0;
  public answer = '';
  public url: string;
  public cards: CardPublic[];
  cardStatus: UserCardQueuePublicDTO;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orlp: ORLPService,
              private cardService: CardService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let url = params['url'];
        url = this.orlp.decodeLink(url);
        this.url = url;
      }
    );

    this.cardService.getCards(this.url).subscribe(
      cards => {
        this.cards = cards;
        console.log(cards);
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

    if (this.cards[this.questionNumber] === undefined) {
      alert('The deck is over');
      this.router.navigate(['/main']);
    }
  }

  sendStatus(status: string) {
    this.cardStatus = new UserCardQueuePublicDTO(status);
    console.log(this.cardStatus.status);
    this.cardService.sendStatus(this.cardStatus, this.cards[this.questionNumber].cardId)
      .subscribe(
        () => {},
        () => {});
    this.onRotateBack();
  }
}
