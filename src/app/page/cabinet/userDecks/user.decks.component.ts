import {Component} from "@angular/core";
import {DeckDTO} from "../../../dto/DeckDTO/DeckDTO";
import {UserDecksService} from "./user.decks.service";
import {UserDTO} from "../../../dto/UsersDTO/UserDTO";
import {CategoryLink} from "../../../dto/CategoryDTO/link.category.DTO";
import {NewDeckDTO} from "../../../dto/DeckDTO/deck.added.DTO";

@Component({
  templateUrl: ('./user.decks.component.html'),
  styleUrls: ['user.decks.css']
})

export class UserDecksComponent {
  private decks: DeckDTO[] = [];
  private categories: CategoryLink[];
  private user: UserDTO;
  private deck: DeckDTO;
  private name: string;
  private description: string;
  private categoryId: number;
  private dialogCategoryId: number;
  private category: string;
  private dialogName: string;
  private dialogButtonName: string;
  private isCreateDialog: boolean;
  private selectedIndex: number;

  constructor(private userDecksService: UserDecksService) {}

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
      this.deck = deck;
      this.decks[this.selectedIndex] = this.deck;
    });
  }

  private onDeckClicked(deck: DeckDTO, index: number): void {
    this.selectElement(index);
    this.deck = deck;
  }

  private prepareCreateDialog() {
    this.dialogName = 'Create new deck';
    this.dialogButtonName = 'Create';
    this.name = '';
    this.description = '';
    this.dialogCategoryId = -1;
    this.categoryId = -1;
    this.category = '';
    this.isCreateDialog = true;
    (<HTMLOptionElement> document.getElementsByTagName('option')[0]).selected = true;
  }

  private prepareEditDialog() {
    this.dialogName = 'Edit the deck';
    this.dialogButtonName = 'Edit';
    this.name = this.deck.name;
    this.description = this.deck.description;
    this.dialogCategoryId = this.deck.categoryId ? this.deck.categoryId : -1;
    this.categoryId = this.deck.categoryId ? this.deck.categoryId : -1;
    this.category = this.deck.category;
    this.isCreateDialog = false;
    (<HTMLOptionElement> document.getElementsByTagName('option')[0]).selected = true;
  }

  private createDeck() {
    if (this.isCreateDialog) {
      this.userDecksService.createDeck(new NewDeckDTO(this.name, this.description, this.categoryId))
        .subscribe(() => this.getOnlyDecksCreatedByTheUser());
    } else {
      this.userDecksService.editDeck(new NewDeckDTO(this.name, this.description, this.categoryId), this.deck.deckId)
        .subscribe(() => this.getDeckCreatedByTheUser(this.deck.deckId));
    }
  }

  private deleteDeck() {
    this.userDecksService.deleteDeck(this.deck.deckId)
      .subscribe(() => this.decks.filter(deck => deck.deckId !== this.deck.deckId));
  }

  private selectElement(index: number): void {
    this.selectedIndex = index;
    let element = document.getElementsByClassName("selected")[0];
    if (element !== undefined) {
      element.classList.remove("selected");
    }
    document.getElementsByClassName('decks-list-item')[index].classList.add("selected");
  }

  private setSelectedDeck(deck: DeckDTO) {
    this.deck = deck;
  }

  onCategorySelect(deviceValue) {
    this.categoryId = deviceValue.value;
  }
}
