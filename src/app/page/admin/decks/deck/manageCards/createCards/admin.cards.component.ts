import {Component, OnInit} from '@angular/core';
import {AdminCardsService} from './admin.cards.service';
import {ORLPService} from '../../../../../../services/orlp.service';
import {Link} from '../../../../../../dto/link';
import {AdminDeck} from '../../../../../../dto/AdminDTO/admin.deck.DTO';
import {CreateCardDTO} from '../../../../../../dto/CardsDTO/CreateCardDTO';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

@Component({
  providers: [AdminCardsService],
  templateUrl: ('./admin.cards.component.html'),
  styleUrls: ['./admin.cards.css']
})

export class AdminCardsComponent implements OnInit {
  public deck: AdminDeck;
  public question: string;
  public answer: string;
  public title: string;
  public rating: '0';
  private url: string;
  private sub: Subscription;

  constructor(private adminCardsService: AdminCardsService, private route: ActivatedRoute,
              private orlp: ORLPService) {
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
    this.adminCardsService.createCard(
      new CreateCardDTO(this.answer, this.question, this.title, this.rating), this.deck.categoryId, this.deck.deckId)
      .subscribe();
  }

  private decodeLink(): void {
    this.url = this.orlp.decodeLink(this.url);
  }

  private takeDeck(): void {
    this.decodeLink();
    this.adminCardsService.getDeck(this.url).subscribe(
      deck => this.deck = deck);
  }

  clearFields() {
    this.answer = '';
    this.question = '';
    this.title = '';
  }

}


