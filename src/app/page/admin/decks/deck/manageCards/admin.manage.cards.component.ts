import {Component, OnInit} from '@angular/core';
import {ORLPService} from '../../../../../services/orlp.service';
import {ActivatedRoute} from '@angular/router';
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
  public edit: boolean = true;
  public cards: CardPublic[] = [];
  public deck: AdminDeck;
  public card: CardPublic;
  public question: string;
  public answer: string;
  public title: string;
  public rating: number;
  private url: string;
  private sub: Subscription;
  public selectedItem: number;
  public listOfCardsMessage: string = 'Loading...'

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
      this.listOfCardsMessage = 'List of cards is empty';
    });
  }

  private getShortCardLink(linkSelectedCard: Link) {
    return this.orlp.getShortLink(linkSelectedCard);
  }

  private decodeCardLink(cardLink: string) {
    return this.orlp.decodeLink(cardLink);
  }

  private onCardClicked(card: CardPublic): void {
    this.edit = true;
    this.card = card;
    this.question = card.question;
    this.answer = card.answer;
  }

  deleteSelectedCard() {
    this.adminManageCardsService.deleteSelectedCard(this.decodeCardLink(this.getShortCardLink(this.card.self)))
      .subscribe(() => {
        this.getCardsList();
        this.card = null;
      });
  }

  public changeEditStatus() {
    this.edit = false;
  }

  public cancelEdit(card: CardPublic) {
    this.edit = true;
    this.card.answer = this.answer;
    this.card.question = this.question;
  }

  public updateCard() {
    this.edit = true;
    this.adminManageCardsService.updateSelectedCard(this.decodeCardLink(this.getShortCardLink(this.card.self)), this.card)
      .subscribe(() => this.getCardsList());
  }

  public onChangeSelectedItemColor(event, item: number) {
    this.selectedItem = item;
  }
}
