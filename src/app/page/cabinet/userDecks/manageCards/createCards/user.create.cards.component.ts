import {Component, NgZone, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {UserCreateCardsService} from './user.create.cards.service';
import {Link} from '../../../../../dto/link';
import {AdminDeck} from '../../../../../dto/AdminDTO/admin.deck.DTO';
import {ORLPService} from '../../../../../services/orlp.service';
import {CreateCardDTO} from '../../../../../dto/CardsDTO/CreateCardDTO';

@Component({
  templateUrl: ('./user.create.cards.component.html'),
  styleUrls: ['./user.create.cards.css']
})

export class UserCreateCardsComponent implements OnInit {
  public deck: AdminDeck;
  public question: string;
  public answer: string;
  public title: string;
  public rating: number;
  private url: string;
  private sub: Subscription;
  public result: string;

  constructor(private userCreateCardsService: UserCreateCardsService, private route: ActivatedRoute,
              private orlp: ORLPService, private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        const url = params['url'];
        this.url = url;
      }
    );
    this.takeDeck();
  }

  public getDeckLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }

  createCard() {
    this.userCreateCardsService.createCard(
      new CreateCardDTO(this.title, this.question, this.answer, this.rating, null), this.deck.categoryId, this.deck.deckId)
      .subscribe(() => {
        this.result = 'Card created!';
        this.clearFields();
      }, () => this.result = 'Error. Please try again!');
  }

  private decodeLink(): void {
    this.url = this.orlp.decodeLink(this.url);
  }

  private takeDeck(): void {
    this.decodeLink();
    this.userCreateCardsService.getDeck(this.url).subscribe(
      deck => {this.deck = deck;
      }
    );
  }

  clearFields() {
    this.answer = '';
    this.question = '';
    this.title = '';
  }

}


