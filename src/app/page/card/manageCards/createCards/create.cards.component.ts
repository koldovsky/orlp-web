import {Component, NgZone, OnInit} from '@angular/core';
import {CreateCardsService} from './create.cards.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {AdminDeck} from '../../../../dto/AdminDTO/admin.deck.DTO';
import {ORLPService} from '../../../../services/orlp.service';
import {Link} from '../../../../dto/link';
import {CreateCardDTO} from '../../../../dto/CardsDTO/CreateCardDTO';

@Component({
  providers: [CreateCardsService],
  templateUrl: ('./create.cards.component.html'),
  styleUrls: ['./create.cards.css']
})

export class CreateCardsComponent implements OnInit {
  public deck: AdminDeck;
  public question: string;
  public answer: string;
  public title: string;
  public rating: number;
  private url: string;
  private sub: Subscription;
  public createCardMessage: string;
  public nameOfPageToBack: string;

  constructor(private createCardsService: CreateCardsService, private route: ActivatedRoute,
              private orlp: ORLPService) {
  }

  ngOnInit(): void {
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

  public getDeckLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }

  createCard(imageInput: any) {
    const file = imageInput.files[0];
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('question', this.question);
    formData.append('answer', this.answer);
    formData.append('image', file);
    // console.log(formData);
    // new CreateCardDTO(this.title, this.question, this.answer, file)
    this.createCardsService.createCard(
      formData, this.deck.categoryId, this.deck.deckId)
      .subscribe(() => {
        this.createCardMessage = 'Card created!';
        this.clearFields();
      }, () => this.createCardMessage = 'Error. Please try again!');
  }

  private decodeLink(): void {
    this.url = this.orlp.decodeLink(this.url);
  }

  private takeDeck(): void {
    this.decodeLink();
    this.createCardsService.getDeck(this.url).subscribe(
      deck => {
        this.deck = deck;
      }
    );
  }

  clearFields() {
    this.answer = '';
    this.question = '';
    this.title = '';
  }

}


