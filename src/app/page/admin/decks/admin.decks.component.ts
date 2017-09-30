import {Component, OnInit} from '@angular/core';
import {AdminDeck} from '../../../dto/AdminDTO/admin.deck.DTO';
import {AdminDecksService} from './admin.decks.service';
import {Link} from '../../../dto/link';
import {ORLPService} from '../../../services/orlp.service';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {Router} from '@angular/router';
import {EditDeckDTO} from '../../../dto/DeckDTO/deck.edit.DTO';
import {DeckEditCategoryDTO} from '../../../dto/DeckDTO/deck.edit.category.DTO';
@Component({
  providers: [AdminDecksService],
  templateUrl: ('./admin.decks.component.html'),
  styleUrls: ['./admin.decks.style.css']
})

export class AdminDecksComponent implements OnInit {

  public deckSelected: AdminDeck;
  public categories: CategoryLink[];
  public deckList: AdminDeck[];
  public categoryForDeck: DeckEditCategoryDTO = new DeckEditCategoryDTO();
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
    this.adminDecksService.createDeckAdmin(
      (new EditDeckDTO( this.deckName, this.deckDescription, this.categoryForDeck, null )) )
      .subscribe( () => this.getDecks() );
  }

  deleteDeck(): void {
    this.adminDecksService.deleteDeck( this.deckSelected.self)
      .subscribe( () => this.getDecks() );
  }

  editDeck (): void {
    this.adminDecksService.editDeck (this.deckSelected.self,
      new EditDeckDTO(this.deckSelected.name , this.deckSelected.description, this.categoryForDeck, this.deckSelected.self))
      .subscribe( () => this.getDecks() );
  }

  assignDeck(deck: AdminDeck): void {
    this.deckSelected = deck;
  }



  onCategorySelect(deviceValue) {
    this.categoryForDeck.id = deviceValue.value;
  }

}


