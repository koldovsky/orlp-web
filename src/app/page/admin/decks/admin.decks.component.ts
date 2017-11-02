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
  public categorySelectedId: number;
  public actionSort = true;
  courseColumns: TableColumnDTO[] = [new TableColumnDTO('name', 'Deck Name', '\u2191'),
    new TableColumnDTO('description', 'Deck Description', ''),
    new TableColumnDTO('rating', 'Deck Rating', ''),
    new TableColumnDTO('category_name', 'Deck Category', ''),
    new TableColumnDTO('deckOwner_account_email', 'Deck Owner', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];
  public currentPage = 1;
  public lastPage: number;

  constructor(private orlp: ORLPService, private adminDecksService: AdminDecksService, private router: Router) {
  }

  ngOnInit(): void {
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
    }else {
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
      (new EditDeckDTO( this.deckName, this.deckDescription, this.categoryForDeck, null )) )
      .subscribe( deckNew => this.deckList.push(deckNew) );
  }

  deleteDeck(): void {
    this.adminDecksService.deleteDeck( this.deckSelected.self)
      .subscribe( () => {
        const index: number = this.deckList.indexOf(this.deckSelected);
        if (index !== -1) {
          this.deckList.splice(index, 1);
        }
      });
  }

  editDeck () {
    this.adminDecksService.editDeck (this.deckSelected.self,
      new EditDeckDTO(this.deckName, this.deckDescription, this.categoryForDeck, this.deckSelected.self))
      .subscribe( deckUpdate => {this.deckSelected.name = this.deckName;
        this.deckSelected.description = this.deckDescription;
      this.deckSelected.category = deckUpdate.category; }) ;
  }

  assignDeck(deck: AdminDeck): void {
    this.deckSelected = deck;
  }



  onCategorySelect(deviceValue) {
    this.categoryForDeck.id = deviceValue.value;
  }

  private beforeCreate() {
    this.deckName = '';
    this.deckDescription = '';
    this.categoryForDeck.id = null;
  }

  private beforeEdit(deck: AdminDeck) {
    this.deckName = deck.name;
    this.deckDescription = deck.description;
    this.categorySelectedId = deck.categoryId;
    this.deckSelected = deck;
  }

}


