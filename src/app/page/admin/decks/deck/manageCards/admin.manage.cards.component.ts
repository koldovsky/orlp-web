import {Component, OnInit} from '@angular/core';
import {ORLPService} from '../../../../../services/orlp.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminManageCardsService} from './admin.manage.cards.service';
import {Subscription} from 'rxjs/Subscription';
import {AdminDeck} from '../../../../../dto/AdminDTO/admin.deck.DTO';
import {Link} from '../../../../../dto/link';
import {CreateCardDTO} from '../../../../../dto/CardsDTO/CreateCardDTO';

@Component({
  providers: [AdminManageCardsService],
  templateUrl: ('./admin.manage.cards.component.html'),
  styleUrls: ['./admin.manage.cards.css']
})

export class AdminManageCardsComponent implements OnInit {
  public cards: CreateCardDTO[] = [];
  public deck: AdminDeck;
  public card: CreateCardDTO;
  public question: string;
  public answer: string;
  public title: string;
  public rating: '0';
  private url: string;
  private sub: Subscription;

  constructor(private adminManageCardsService: AdminManageCardsService, private route: ActivatedRoute,
              private orlp: ORLPService) {}

  ngOnInit() {

    this.sub = this.route.params.subscribe(
      params => {
        const url = params['url'];
        this.url = url;
      }
    );
    this.takeDeck();
  }
  private decodeLink(): void {
    this.url = this.orlp.decodeLink(this.url);
  }
  public getDeckLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }
  private selectElement (index: number): void {
    const element = document.getElementsByClassName('selected')[0];
    if (element !== undefined) {
      element.classList.remove('selected');
    }
   document.getElementsByClassName('cards-list-item')[index].classList.add('selected');
}
  private takeDeck(): void {
    this.decodeLink();
    this.adminManageCardsService.getDeck(this.url).subscribe(
      deck => {
        this.deck = deck;
        this.adminManageCardsService.getCards(this.deck.deckId).subscribe(cards => {this.cards = cards;
        });
      });
  }
  private onCardClicked(card: CreateCardDTO, index: number): void {
    this.selectElement(index);
    this.card = card;
  }

  private setSelectedCard(card: CreateCardDTO) {
    this.card = card;
  }

}
