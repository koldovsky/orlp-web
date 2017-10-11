import {Component, OnInit} from '@angular/core';
import {DeckDTO} from '../../../dto/DeckDTO/DeckDTO';
import {UserDecksService} from './user.decks.service';
import {UserDTO} from '../../../dto/UsersDTO/UserDTO';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {NewDeckDTO} from '../../../dto/DeckDTO/deck.added.DTO';
import {Link} from '../../../dto/link';
import {ORLPService} from '../../../services/orlp.service';

@Component({
  templateUrl: ('./user.decks.component.html'),
  styleUrls: ['user.decks.css']
})

export class UserDecksComponent implements OnInit {
  decks: DeckDTO[] = [];
  categories: CategoryLink[];
  private user: UserDTO;
  selectedDeck: DeckDTO;
  name: string;
  description: string;
  categoryId: number;
  dialogCategoryId: number;
  category: string;
  dialogName: string;
  dialogButtonName: string;
  private isCreateDialog: boolean;
  private selectedIndex: number;

  constructor(private userDecksService: UserDecksService, private orlp: ORLPService) {
  }

  ngOnInit() {
    this.userDecksService.getUser().subscribe(user => {
      this.user = user;
      this.getOnlyDecksCreatedByTheUser();
    });
    this.userDecksService.getCategories().subscribe(categories => this.categories = categories);
  }

  private getOnlyDecksCreatedByTheUser(): void {
    this.userDecksService.getOnlyDecksCreatedByTheUser().subscribe(decks => this.decks = decks);
  }

  private getDeckCreatedByTheUser(deckId: number): void {
    this.userDecksService.getDeckCreatedByTheUser(deckId).subscribe(deck => {
      this.selectedDeck = deck;
      this.decks[this.selectedIndex] = this.selectedDeck;
    });
  }

  private onDeckClicked(deck: DeckDTO, index: number): void {
    this.selectedIndex = index;
    this.selectedDeck = deck;
  }

  private prepareCreateDialog() {
    this.dialogName = 'Create new deck';
    this.dialogButtonName = 'Create';
    this.name = '';
    this.description = '';
    this.dialogCategoryId = null;
    this.categoryId = null;
    this.category = '';
    this.isCreateDialog = true;
  }

  private prepareEditDialog() {
    this.dialogName = 'Edit the deck';
    this.dialogButtonName = 'Save';
    this.name = this.selectedDeck.name;
    this.description = this.selectedDeck.description;
    this.dialogCategoryId = this.selectedDeck.categoryId ? this.selectedDeck.categoryId : null;
    this.categoryId = this.selectedDeck.categoryId ? this.selectedDeck.categoryId : null;
    this.category = this.selectedDeck.category;
    this.isCreateDialog = false;
  }

  private createDeck() {
    if (this.isCreateDialog) {
      this.userDecksService.createDeck(new NewDeckDTO(this.name, this.description, this.categoryId))
        .subscribe(() => this.getOnlyDecksCreatedByTheUser());
    } else {
      this.userDecksService.editDeck(new NewDeckDTO(this.name, this.description, this.categoryId), this.selectedDeck.deckId)
        .subscribe(() => this.getDeckCreatedByTheUser(this.selectedDeck.deckId));
    }
  }

  private deleteDeck() {
    this.userDecksService.deleteDeck(this.selectedDeck.deckId)
      .subscribe(() => {
        this.decks = this.decks.filter(deck => deck.deckId !== this.selectedDeck.deckId);
        this.selectedDeck = null;
      });
  }

  public getDeckLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }
}
