import {Component, OnInit} from '@angular/core';
import {AdminDeck} from '../../../dto/AdminDTO/admin.deck.DTO';
import {AdminDecksService} from './admin.decks.service';
import {Link} from '../../../dto/link';
import {ORLPService} from '../../../services/orlp.service';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {DeckAddedDTO} from '../../../dto/DeckDTO/deck.added.DTO';
import {Router} from '@angular/router';


@Component({
  providers: [AdminDecksService],
  templateUrl: ('./admin.decks.component.html'),
  styleUrls: ['./admin.decks.style.css']
})

export class AdminDecksComponent implements OnInit {
  deckList: AdminDeck[];
  deckSelectedId: number;
  public categories: CategoryLink[];
  public chosenCategoryId: number;
  public category: string;
  public deckName: string;
  public deckDescription: string;
  constructor(private orlp: ORLPService, private adminDecksService: AdminDecksService, private router: Router) {
  }

  ngOnInit(): void {
    this.getDecks();
    this.getCategories();
  }


  createDeck() {
    this.adminDecksService.createDeck(
      new DeckAddedDTO(this.deckName, this.deckDescription), this.chosenCategoryId)
      .subscribe( () => this.getDecks() );
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

  deleteDeck(): void {
    this.adminDecksService.deleteDeck(this.deckSelectedId)
  .subscribe( () => this.getDecks() );
  }

  editDeck (): void {
    this.adminDecksService.editDeck (new DeckAddedDTO ( this.deckName , this.deckDescription ), this.deckSelectedId)
      .subscribe( () => this.getDecks() );
  }

  assignDeskId(id: number): void {
    this.deckSelectedId = id;
  }


  onCategorySelect(deviceValue) {
    this.chosenCategoryId = deviceValue.value;
  }


}


