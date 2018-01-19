import {Component, NgZone, OnInit} from '@angular/core';
import {CreateCardsService} from './create.cards.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {AdminDeck} from '../../../../dto/AdminDTO/admin.deck.DTO';
import {ORLPService} from '../../../../services/orlp.service';
import {Link} from '../../../../dto/link';



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
  public createCardMessage: string;
  public nameOfPageToBack: string;
  public imageArray: File[] = [];
  private url: string;
  private sub: Subscription;

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
  loadImage(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (file: any) => {
          this.imageArray.push(file.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  public showImage(index: number) {

  }

  public getDeckLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }

  createCard(imageInput: any) {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('question', this.question);
    formData.append('answer', this.answer);
    for (let i = 0; i < this.imageArray.length; i++) {
      formData.append('image', this.imageArray[i]);
    }
    this.createCardsService.createCard(
      formData, this.deck.categoryId, this.deck.deckId)
      .subscribe(() => {
        this.createCardMessage = 'Card created!';
        this.imageArray = [];
        this.clearFields();
      }, () => this.createCardMessage = 'Error. Please try again!');
  }

  clearFields() {
    this.answer = '';
    this.question = '';
    this.title = '';
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

}


