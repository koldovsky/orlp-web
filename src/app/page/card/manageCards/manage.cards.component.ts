import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ManageCardsService} from './manage.cards.service';
import {Subscription} from 'rxjs/Subscription';
import {CardPublic} from '../../../dto/CardsDTO/public.card.DTO';
import {AdminDeck} from '../../../dto/AdminDTO/admin.deck.DTO';
import {ORLPService} from '../../../services/orlp.service';
import {Link} from '../../../dto/link';
import {LogoutService} from '../../logout/logout.service';
import {Router} from '@angular/router';


@Component({
  providers: [ManageCardsService],
  templateUrl: ('./manage.cards.component.html'),
  styleUrls: ['./manage.cards.css']
})

export class ManageCardsComponent implements OnInit {
  public edit = true;
  public cards: CardPublic[] = [];
  public deck: AdminDeck;
  public card: CardPublic;
  public question: string;
  public answer: string;
  public title: string;
  public rating: number;
  private url: string;
  private sub: Subscription;
  public nameOfPageToBack: string;
  public selectedItem: number;
  public listOfCardsMessage = 'Loading...';
  isAuthorized: boolean;

  constructor(private manageCardsService: ManageCardsService, private route: ActivatedRoute,
              private orlp: ORLPService, private logoutService: LogoutService, private router: Router) {
  }

  ngOnInit() {
    this.isAuthorized = this.logoutService.isAuthorized();
    if (!this.isAuthorized) {
      this.router.navigate(['login']);
    }
    this.sub = this.route.params.subscribe(
      params => {
        const url = params['url'];
        const nameOfPageToBack = params['nameOfPageToBack'];
        this.url = url;
        this.nameOfPageToBack = nameOfPageToBack;
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
    this.manageCardsService.getDeck(this.url).subscribe(
      deck => {
        this.deck = deck;
        this.getCardsList();
      });
  }

  private getCardsList() {
    this.manageCardsService.getCards(this.deck.deckId).subscribe(cards => {
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
    this.title = card.title;
    this.question = card.question;
    this.answer = card.answer;
  }

  deleteSelectedCard() {
    this.manageCardsService.deleteSelectedCard(this.decodeCardLink(this.getShortCardLink(this.card.self)))
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
    this.card.title = this.title;
    this.card.answer = this.answer;
    this.card.question = this.question;
  }

  public updateCard() {
    this.edit = true;
    this.manageCardsService.updateSelectedCard(this.decodeCardLink(this.getShortCardLink(this.card.self)), this.card)
      .subscribe(() => this.getCardsList());
  }

  public onChangeSelectedItemColor(event, item: number) {
    this.selectedItem = item;
  }
}
