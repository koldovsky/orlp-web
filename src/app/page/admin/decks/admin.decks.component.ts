import {Component, OnInit} from '@angular/core';
import {AdminDeck} from '../../../dto/AdminDTO/admin.deck.DTO';
import {AdminDecksService} from './admin.decks.service';
import {Link} from '../../../dto/link';
import {ORLPService} from '../../../services/orlp.service';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {NewDeckDTO} from '../../../dto/DeckDTO/deck.added.DTO';
import {Router} from '@angular/router';


@Component({
  providers: [AdminDecksService],
  templateUrl: ('./admin.decks.component.html'),
  styleUrls: ['./admin.decks.style.css']
})

export class AdminDecksComponent implements OnInit {

  public deckSelected: AdminDeck;
  public categories: CategoryLink[];
  public deckList: AdminDeck[];
  public chosenCategoryId: number;
  public deckName: string;
  public deckDescription: string;
  constructor(private orlp: ORLPService, private adminDecksService: AdminDecksService, private router: Router) {
  }

  ngOnInit(): void {
    this.getDecks();
    this.getCategories();
  }

  getDecks() {
    this.adminDecksService.getFullDeckList()
      .subscribe(deckList => this.deckList = deckList);
  }

  getCategories() {
    this.adminDecksService.getCategories().subscribe(categories => {
        this.categories = categories;
      }
    );
  }

  public getDeckLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }

  createDeck() {
    this.adminDecksService.createDeck(
      (new NewDeckDTO( this.deckName, this.deckDescription, this.chosenCategoryId )) )
      .subscribe( () => this.getDecks() );
  }

  deleteDeck(): void {
    this.adminDecksService.deleteDeck(this.deckSelected.deckId)
      .subscribe( () => this.getDecks() );
  }

  editDeck (): void {
    this.adminDecksService.editDeck (
      ( new NewDeckDTO(this.deckSelected.name , this.deckSelected.description , this.chosenCategoryId )),
      this.deckSelected.deckId )
      .subscribe( () => this.getDecks() );
  }

  assignDeck(deck: AdminDeck): void {
    this.deckSelected = deck;
  }



  onCategorySelect(deviceValue) {
    this.chosenCategoryId = deviceValue.value;
  }

}


