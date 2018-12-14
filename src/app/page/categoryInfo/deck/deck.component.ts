import {Component, Input, OnInit} from '@angular/core';
import {DeckService} from './deck.service';
import {ORLPService} from '../../../services/orlp.service';
import {DeckLinkByCategory} from '../../../dto/DeckDTO/linkByCategory.deck.DTO';
import {Link} from '../../../dto/link';
import {Router} from '@angular/router';
import {DeckLinkByFolderWithStatus} from '../../../dto/DeckDTO/linkByFolderWithStatus.deck.DTO';
import {DeckPublic} from '../../../dto/DeckDTO/public.deck.DTO';
import {IStarRatingOnClickEvent} from 'angular-star-rating';
import {Rating} from '../../../dto/Rating';
import {CardComponent} from '../../card/card.component';
import {TableColumnDTO} from '../../../dto/TableColumnDTO';
import {NumberOfCardsThatNeedRepeatingDTO} from '../../../dto/number.of.cards.that.need.repeating.dto';
import {UserStatusChangeService} from '../../userStatusChange/user.status.change.service';
import {NGXLogger} from 'ngx-logger';
import {AuthenticationService} from '../../authentication/authentication.service';
import {MainComponent} from '../../main/main.component';
import {MessageDTO} from '../../../dto/MessageDTO';

@Component({
  selector: 'app-deck-table',
  templateUrl: ('./deck.component.html'),
  styleUrls: ['../categoryInfo.css', '../../courseInfo/courseInfo.css']
})
export class DeckComponent implements OnInit {

  public decks: DeckLinkByCategory[];
  public deckSelected: DeckLinkByCategory;
  public decksWithStatus: DeckLinkByFolderWithStatus[] = [];
  public decksIdInYourFolder: number[] = [];
  public isAuthorized: boolean;
  private isAuthenticated: boolean;
  public isBought: boolean;
  public error: boolean;
  public success: boolean;
  public responseMessage: MessageDTO = new MessageDTO();
  @Input() url: string;
  @Input() categoryId: number;
  actionSort = true;
  courseColumns: TableColumnDTO[] = [new TableColumnDTO('name', 'Name', '\u2191'),
    new TableColumnDTO('description', 'Description', ''),
    new TableColumnDTO('deckPrice.price', 'Price', ''),
    new TableColumnDTO('', '', ''),
    new TableColumnDTO('', '', ''),
    new TableColumnDTO('rating', 'Rating', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];
  currentPage = 1;
  lastPage: number;
  numbersOfCardsThatNeedRepeating: NumberOfCardsThatNeedRepeatingDTO[] = [];
  public status: string;

  constructor(private deckService: DeckService,
              private orlpService: ORLPService,
              private mainComponent: MainComponent,
              private router: Router,
              private authentication: AuthenticationService,
              private userStatusChangeService: UserStatusChangeService,
              private logger: NGXLogger) {
  }

  ngOnInit(): void {
    this.status = sessionStorage.getItem('status');
    this.url = this.orlpService.decodeLink(this.url);
    this.isAuthenticated = this.authentication.isAuthenticated();
    if (this.isAuthenticated === true) {
      this.isAuthorized = true;
    }
    this.getDeckByPage(this.currentPage);
  }

  public getDeckByPage(numberPage: number) {
    this.deckService.getDecks(this.categoryId, numberPage, this.selectedSortedParam.nameColumnParam, this.actionSort)
      .subscribe(deckList => {
        this.currentPage = numberPage;
        this.decks = deckList.decks;
        this.lastPage = deckList.totalPages;
        if (this.isAuthorized) {
          this.getIdDecksInYourFolder();
        } else {
          this.createDecksWithStatus();
        }
        if (this.isAuthorized) {
          for (const deck of this.decks) {
            this.deckService.countCardsThatNeedRepeating(deck.deckId)
              .subscribe(numberOfCardsThatNeedRepeating => this.numbersOfCardsThatNeedRepeating.push(
                new NumberOfCardsThatNeedRepeatingDTO(deck.deckId, numberOfCardsThatNeedRepeating)));
          }
        }
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
    this.getDeckByPage(this.currentPage);
  }

  addDeckToFolder(deckId: number): void {
    this.deckService.addDeckToFolder(deckId).subscribe(
      () => {
        this.changeDeckStatus(deckId);
      },
      error => this.logger.log(error)
    );
  }

  getIdDecksInYourFolder() {
    this.deckService.getIdDecksInYourFolder().subscribe(
      id => {
        this.decksIdInYourFolder = id;
        this.createDecksWithStatus();
      });
  }

  createDecksWithStatus() {
    this.decksWithStatus = [];
    for (const entry of this.decks) {
      this.decksWithStatus.push(new DeckLinkByFolderWithStatus(entry.name,
        entry.description, entry.rating, entry.self, entry.cards, entry.deckId, false, entry.synthax, entry.price, entry.isBought));
    }
    this.setStatusForDecksThatInFolder();
  }

  setStatusForDecksThatInFolder() {
    for (const entry of this.decksWithStatus) {
      for (const id of this.decksIdInYourFolder) {
        if (entry.deckId === id) {
          entry.status = true;
          break;
        }
      }
    }
  }

  getCardsLink(link: Link): string {
    const shortLink = this.orlpService.getShortLink(link);
    return this.orlpService.decodeLink(shortLink);
  }

  startLearning(deckId: number, deckSynthax: String): void {
    this.router.navigate(['/cards', '/api/decks/' + deckId + '/learn']);
    CardComponent.deckId = deckId;
    CardComponent.synthax = deckSynthax;
  }

  changeDeckStatus(deckId: number) {
    for (const entry of this.decksWithStatus) {
      if (entry.deckId === deckId) {
        entry.status = !entry.status;
        break;
      }
    }
  }

  onDeckRatingClick = (deck: DeckPublic, event: IStarRatingOnClickEvent) => {
    const deckRating: Rating = new Rating(event.rating);
    this.deckService.addDeckRating(deckRating, deck.deckId).subscribe(() => {
      deck.rating = event.rating;
    }, (error) => {
      this.userStatusChangeService.handleUserStatusError(error.status);
    });
  }

  getNumberOfCardsThatNeedRepeating(deckId: number): number {
    for (const value of this.numbersOfCardsThatNeedRepeating) {
      if (value.deckId === deckId) {
        return value.numberOfCardsThatNeedRepeating;
      }
    }
  }

  private downloadCards(deckId: number, deckName: string) {
    this.deckService.downloadCards(deckId, deckName);
  }

  assignDeck(deck: DeckLinkByCategory): void {
    this.error = false;
    this.success = false;
    this.deckSelected = deck;
  }

  buyDeck() {
    this.isBought = false;
    this.deckService.buyDeck(this.deckSelected.deckId)
      .subscribe(
        (response) => {
          this.mainComponent.userDetails.pointsBalance = response.points;
          this.deckSelected.isBought = response.isBought;
          this.success = true;
        }, (response) => {
          this.responseMessage = response.json();
          this.success = false;
          this.error = true;
        });
  }
}
