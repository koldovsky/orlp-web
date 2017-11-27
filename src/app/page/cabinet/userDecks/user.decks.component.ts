import {Component, OnInit} from '@angular/core';
import {DeckDTO} from '../../../dto/DeckDTO/DeckDTO';
import {UserDecksService} from './user.decks.service';
import {UserDTO} from '../../../dto/UsersDTO/UserDTO';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {NewDeckDTO} from '../../../dto/DeckDTO/deck.added.DTO';
import {Link} from '../../../dto/link';
import {ORLPService} from '../../../services/orlp.service';
import {DeckService} from "../../categoryInfo/deck/deck.service";

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
  public synthax: String;
  public allSynthaxes: String[] = ['' , 'JAVA', 'HTML', 'C++', 'C#', 'JavaScript', 'TypeScript',
    'PHP', 'Go', 'Swift', 'Scala', 'Pascal', 'Ruby', 'SQL', 'C', 'ObjectiveC'];

  constructor(private userDecksService: UserDecksService, private orlp: ORLPService, private deckService: DeckService) {
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
    this.synthax = '';
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
    this.synthax = this.selectedDeck.synthax;
    this.isCreateDialog = false;
  }

  private createDeck() {
    if (this.isCreateDialog) {
      this.userDecksService.createDeck(new NewDeckDTO(this.name, this.description, this.categoryId, this.synthax))
        .subscribe(() => this.getOnlyDecksCreatedByTheUser());
    } else {
      this.userDecksService.editDeck(new NewDeckDTO(this.name, this.description, this.categoryId, this.synthax), this.selectedDeck.deckId)
        .subscribe(() => this.getDeckCreatedByTheUser(this.selectedDeck.deckId));
    }
    console.log(this.synthax);
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

  private downloadCards(deckId: number, deckName: string) {
    this.deckService.downloadCards(deckId, deckName);
  }

  private downloadCardsTemplate() {
    this.userDecksService.downloadCardsTemplate();
  }

  private uploadCards(deckId, event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.userDecksService.uploadCards(formData, deckId).subscribe();
  }
}
