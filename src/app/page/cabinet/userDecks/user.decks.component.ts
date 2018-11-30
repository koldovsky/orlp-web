import {Component, OnInit} from '@angular/core';
import {DeckDTO} from '../../../dto/DeckDTO/DeckDTO';
import {UserDecksService} from './user.decks.service';
import {UserDTO} from '../../../dto/UsersDTO/UserDTO';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {NewDeckDTO} from '../../../dto/DeckDTO/deck.added.DTO';
import {Link} from '../../../dto/link';
import {ORLPService} from '../../../services/orlp.service';
import {DeckService} from '../../categoryInfo/deck/deck.service';
import {ERROR_FILE_TYPE_MESSAGE} from '../../../services/orlp.settings';
import {CabinetService} from "../cabinet.service";
import {NGXLogger} from "ngx-logger";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  price: number;
  dialogName: string;
  dialogButtonName: string;
  private isCreateDialog: boolean;
  private selectedIndex: number;
  public synthax: String;
  public deckGroup: FormGroup;
  public errorFileMessage: String;
  public allSynthaxes: String[] = ['' , 'JAVA', 'HTML', 'C++', 'C#', 'JavaScript', 'TypeScript',
    'PHP', 'Go', 'Swift', 'Scala', 'Pascal', 'Ruby', 'SQL', 'C', 'ObjectiveC'];

  constructor(private userDecksService: UserDecksService,
              private cabinetService: CabinetService,
              private orlp: ORLPService,
              private deckService: DeckService,
              private logger: NGXLogger,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userDecksService.getUser().subscribe(user => {
      this.user = user;
      this.getOnlyDecksCreatedByTheUser();
    });
    this.userDecksService.getCategories().subscribe(categories => this.categories = categories);

    const inputValidator = [ Validators.required];

    const priceValidator = [Validators.max(999999), Validators.pattern(new RegExp(/^[0-9]+$/))];
    this.deckGroup = this.fb.group({
      'name': [null,inputValidator],
      'description': [null,inputValidator],
      'categoryId': [null,inputValidator],
      'syntax': [null],
      'price': [null, priceValidator]
    });
  }

  private getOnlyDecksCreatedByTheUser(): void {
    this.userDecksService.getOnlyDecksCreatedByTheUser().subscribe(decks => this.decks = decks);
  }

  private getDeckCreatedByTheUser(deckId: number): void {
    this.userDecksService.getDeckCreatedByTheUser(deckId).subscribe(deck => {
      this.selectedDeck = deck;
      if(this.selectedDeck.price == null)
        this.selectedDeck.price = 0;
      this.decks[this.selectedIndex] = this.selectedDeck;
    });
  }

  private onDeckClicked(deck: DeckDTO, index: number): void {
    this.selectedIndex = index;
    this.selectedDeck = deck;
    if(this.selectedDeck.price == null)
      this.selectedDeck.price = 0;
  }

  prepareCreateDialog() {
    this.deckGroup.reset();
    this.dialogName = 'Create new deck';
    this.dialogButtonName = 'Create';
    this.deckGroup.controls['name'].setValue(null);
    this.deckGroup.controls['description'].setValue(null);
    this.dialogCategoryId = null;
    this.deckGroup.controls['categoryId'].setValue( null);
    this.deckGroup.controls['syntax'].setValue(null);
    this.deckGroup.controls['price'].setValue(null);
    this.isCreateDialog = true;
  }

  private prepareEditDialog() {
    this.dialogName = 'Edit the deck';
    this.dialogButtonName = 'Save';
    this.deckGroup.controls['name'].setValue(this.selectedDeck.name);
    this.deckGroup.controls['description'].setValue(this.selectedDeck.description);
    this.dialogCategoryId = this.selectedDeck.categoryId ? this.selectedDeck.categoryId : null;
    this.deckGroup.controls['categoryId'].setValue( this.selectedDeck.categoryId ? this.selectedDeck.categoryId : null);
    this.deckGroup.controls['syntax'].setValue(this.selectedDeck.synthax);
    this.deckGroup.controls['price'].setValue(this.selectedDeck.price != null ? this.selectedDeck.price : null);
    this.category = this.selectedDeck.category;
    this.isCreateDialog = false;
  }

  private createDeck() {
    if (this.isCreateDialog) {
      this.userDecksService.createDeck(new NewDeckDTO(this.deckGroup.value.name, this.deckGroup.value.description,
        this.deckGroup.value.categoryId, this.deckGroup.value.syntax,
        (this.deckGroup.value.price == "" || this.deckGroup.value.price == 0) ? null : this.deckGroup.value.price))
        .subscribe(() => {this.getOnlyDecksCreatedByTheUser();});
    } else {
      this.userDecksService.editDeck(new NewDeckDTO(this.deckGroup.value.name, this.deckGroup.value.description,
        this.deckGroup.value.categoryId, this.deckGroup.value.syntax,
        (this.deckGroup.value.price == "" || this.deckGroup.value.price == 0) ? null : this.deckGroup.value.price), this.selectedDeck.deckId)
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

  changeAccessDeck(deck: DeckDTO, access: boolean) {
    deck.hidden = access;

    this.cabinetService.toggleDeck(deck)
      .subscribe((response) => this.logger.log(response));
  }

  isOwnerDeck(deck: DeckDTO): boolean {
    return deck.ownerId === this.user.id;
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
    this.userDecksService.uploadCards(formData, deckId)
      .subscribe(next => this.errorFileMessage = '',
          error => this.errorFileMessage = ERROR_FILE_TYPE_MESSAGE);
  }
}
