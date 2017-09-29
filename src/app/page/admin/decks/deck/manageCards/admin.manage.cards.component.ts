import {Component, OnInit} from '@angular/core';
import {ORLPService} from '../../../../../services/orlp.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminManageCardsService} from './admin.manage.cards.service';
import {Subscription} from 'rxjs/Subscription';
import {AdminDeck} from '../../../../../dto/AdminDTO/admin.deck.DTO';
import {Link} from '../../../../../dto/link';
import {CardPublic} from '../../../../../dto/CardsDTO/public.card.DTO';


@Component({
  providers: [AdminManageCardsService],
  templateUrl: ('./admin.manage.cards.component.html'),
  styleUrls: ['./admin.manage.cards.css']
})

export class AdminManageCardsComponent implements OnInit {
  public blockEdit: boolean = true;
  public cards: CardPublic[] = [];
  public deck: AdminDeck;
  public card: CardPublic;
  public question: string;
  public answer: string;
  public title: string;
  public rating: '0';
  private url: string;
  private sub: Subscription;
  public cardLink: string;

  constructor(private adminManageCardsService: AdminManageCardsService, private route: ActivatedRoute,
              private orlp: ORLPService) {
  }

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

  private takeDeck(): void {
    this.decodeLink();
    this.adminManageCardsService.getDeck(this.url).subscribe(
      deck => {
        this.deck = deck;
        this.getCardsList();
      });
  }

  private getCardsList() {
    this.adminManageCardsService.getCards(this.deck.deckId).subscribe(cards => {
      this.cards = cards;
    });
  }

  private getShortCardLink(linkSelectedCard: Link) {
    return this.orlp.getShortLink(linkSelectedCard);
  }

  private decodeCardLink(cardLink: string) {
    return this.orlp.decodeLink(cardLink);
  }

  private onCardClicked(card: CardPublic): void {
    this.card = card;
    this.cardLink = this.decodeCardLink(this.getShortCardLink(card.self));
  }

  deleteSelectedCard() {
    this.adminManageCardsService.deleteSelectedCard(this.cardLink).subscribe(() => {
      this.getCardsList();
      this.card = null;
    });
  }

  public activateEdit() {
    this.blockEdit = false;
  }

  public cancelEdit(card: CardPublic) {
    this.blockEdit = true;
    this.card = card;
  }

  updateCard() {
    this.blockEdit = true;
    this.adminManageCardsService.updateSelectedCard(this.cardLink, this.card).subscribe(() => {
        this.getCardsList();
      }
    );
  }
}
