import {Component, OnInit} from '@angular/core';
import {AdminDeck} from '../../../dto/AdminDTO/admin.deck.DTO';
import {AdminDecksService} from './admin.decks.service';
import {Link} from '../../../dto/link';
import {ORLPService} from '../../../services/orlp.service';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {Router} from '@angular/router';
import {EditDeckDTO} from '../../../dto/DeckDTO/deck.edit.DTO';
import {DeckEditCategoryDTO} from '../../../dto/DeckDTO/deck.edit.category.DTO';
import {TableColumnDTO} from '../../../dto/TableColumnDTO';
import {CreateDeckDTO} from '../../../dto/DeckDTO/deck.create.DTO';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  providers: [AdminDecksService],
  templateUrl: ('./admin.decks.component.html'),
  styleUrls: ['./admin.decks.style.css']
})

export class AdminDecksComponent implements OnInit {

  public deckForm: FormGroup;
  public deckSelected: AdminDeck;
  public categoryId: number;
  public category: string;
  public categories: CategoryLink[];
  public deckList: AdminDeck[];
  public deckName: string;
  public deckDescription: string;
  public deckId: number;
  public actionSort = true;
  courseColumns: TableColumnDTO[] = [new TableColumnDTO('name', 'Deck Name', '\u2191'),
    new TableColumnDTO('description', 'Deck Description', ''),
    new TableColumnDTO('rating', 'Deck Rating', ''),
    new TableColumnDTO('category_name', 'Deck Category', ''),
    new TableColumnDTO('deckOwner_account_email', 'Deck Owner', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];
  public currentPage = 1;
  public lastPage: number;

  constructor(private orlp: ORLPService, private formBuilder: FormBuilder,
              private adminDecksService: AdminDecksService, private router: Router) {
  }

  ngOnInit(): void {
    const nameValidators = [Validators.required, Validators.minLength(2),
      Validators.maxLength(50), Validators.pattern('[^`~!@$%^*()\\-_=\\[\\]{};:\'\\".>/?,<\\|0-9]*')];
    const descriptionValidators = [Validators.required, Validators.minLength(10),
      Validators.maxLength(200), Validators.pattern('[^`~!@$%^*()\\-_=\\[\\]{};:\'\\">/?<\\|0-9]*')];
    this.deckForm = this.formBuilder.group({
      name: ['', nameValidators],
      description: ['', descriptionValidators]
    });
    this.getDecks(this.currentPage);
    this.getCategories();
  }

  getDecks(numberPage: number) {
    this.adminDecksService.getFullDeckList(numberPage, this.selectedSortedParam.nameColumnParam, this.actionSort)
      .subscribe(value => {
        this.deckList = value.adminDecks;
        this.lastPage = value.totalPages;
        this.currentPage = numberPage;
      });
  }

  public sortBy(param: TableColumnDTO) {
    if (param === this.selectedSortedParam) {
      this.actionSort = !this.actionSort;
    } else {
      this.actionSort = true;
      this.selectedSortedParam.symbolSorting = '';
    }
    if (this.actionSort) {
      param.symbolSorting = '\u2191';
    } else {
      param.symbolSorting = '\u2193';
    }
    this.selectedSortedParam = param;
    this.getDecks(this.currentPage);
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
      (new CreateDeckDTO(this.deckName, this.deckDescription, this.categoryId, null)))
      .subscribe(deckNew => this.deckList.push(deckNew));
  }

  deleteDeck(): void {
    this.adminDecksService.deleteDeck(this.deckSelected.self)
      .subscribe(() => {
        const index: number = this.deckList.indexOf(this.deckSelected);
        if (index !== -1) {
          this.deckList.splice(index, 1);
        }
      });
  }

  editDeck() {
    this.adminDecksService.editDeck(new EditDeckDTO(this.category, this.deckId, this.deckName, this.deckDescription, this.categoryId,
      this.deckSelected.self))
      .subscribe(deckUpdate => {
        this.getCategories();
        this.deckSelected.deckId = this.deckId;
        this.deckSelected.name = this.deckName;
        this.deckSelected.description = this.deckDescription;
        this.deckSelected.categoryId = this.categoryId;
        this.deckSelected.category = deckUpdate.category;
      });
  }

  assignDeck(deck: AdminDeck): void {
    this.deckSelected = deck;
  }


  onCategorySelect(deviceValue) {
    this.categoryId = deviceValue.value;
  }

  beforeCreate() {
    this.deckName = '';
    this.deckDescription = '';
    this.categoryId = null;
  }

  beforeEdit(deck: AdminDeck) {
    this.category = deck.category;
    this.deckId = deck.deckId;
    this.deckName = deck.name;
    this.deckDescription = deck.description;
    this.categoryId = deck.categoryId;
    this.deckSelected = deck;
  }

  isFormValid(): boolean {
    return this.deckForm.valid;
  }
}


