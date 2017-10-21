import {Component, Input, OnInit} from '@angular/core';
import {DeckService} from './deck.service';
import {ORLPService} from '../../../services/orlp.service';
import {DeckLinkByCategory} from '../../../dto/DeckDTO/linkByCategory.deck.DTO';
import {Link} from '../../../dto/link';
import {Router} from '@angular/router';
import {DeckLinkByFolderWithStatus} from '../../../dto/DeckDTO/linkByFolderWithStatus.deck.DTO';
import {LogoutService} from '../../logout/logout.service';
import {DeckPublic} from '../../../dto/DeckDTO/public.deck.DTO';
import {IStarRatingOnClickEvent} from 'angular-star-rating';
import {Rating} from '../../../dto/Rating';
import {CardComponent} from '../../card/card.component';
import {NumberOfCardsThatNeedRepeatingDTO} from '../../../dto/number.of.cards.that.need.repeating.dto';

@Component({
  selector: 'app-deck-table',
  templateUrl: ('./deck.component.html'),
  styleUrls: ['../categoryInfo.css']
})
export class DeckComponent implements OnInit {

  public decks: DeckLinkByCategory[];
  public decksWithStatus: DeckLinkByFolderWithStatus[] = [];
  public decksIdInYourFolder: number[] = [];
  public isAuthorized: boolean;
  @Input() url: string;
  @Input() categoryId: number;
  actionSort = true;
  selectedSortedParam: string = 'id';
  currentPage: number = 1;
  lastPage: number;
  numbersOfCardsThatNeedRepeating: NumberOfCardsThatNeedRepeatingDTO[] = [];

  constructor(private deckService: DeckService,
              private orlpService: ORLPService,
              private router: Router,
              private logoutService: LogoutService) {
  }

  ngOnInit(): void {
    this.url = this.orlpService.decodeLink(this.url);
    this.isAuthorized = this.logoutService.isAuthorized();
    this.getDeckByPage(this.currentPage);
  }

  public getDeckByPage(numberPage: number) {
    this.deckService.getDecks(this.categoryId, numberPage, this.selectedSortedParam, this.actionSort)
      .subscribe(deckList => {
        this.currentPage = numberPage;
        this.decks = deckList.decks;
        this.lastPage = deckList.totalPages;
        if (this.isAuthorized) {
          this.getIdDecksInYourFolder();
        } else {
          this.createDecksWithStatus();
        }
        for (const deck of this.decks) {
          this.deckService.countCardsThatNeedRepeating(deck.deckId)
            .subscribe(numberOfCardsThatNeedRepeating => this.numbersOfCardsThatNeedRepeating.push(
              new NumberOfCardsThatNeedRepeatingDTO(deck.deckId, numberOfCardsThatNeedRepeating)));
        }
      });
  }

  public sortBy(param: string) {
    if (param === this.selectedSortedParam) {
      this.actionSort = !this.actionSort;
    } else {
      this.actionSort = true;
    }
    this.selectedSortedParam = param;
    this.getDeckByPage(this.currentPage);
  }

  addDeckToFolder(deckId: number): void {
    this.deckService.addDeckToFolder(deckId).subscribe(
      () => {
        this.changeDeckStatus(deckId);
      },
      error => console.log(error)
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
        entry.description, entry.rating, entry.self, entry.cards, entry.deckId, false));
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

  startLearning(deckId: number): void {
    this.router.navigate(['/cards', '/api/private/decks/' + deckId + '/learn']);
    CardComponent.deckId = deckId;
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
    this.deckService.addDeckRating(deckRating, deck.deckId).subscribe(() => deck.rating = event.rating);
  }

  getNumberOfCardsThatNeedRepeating(deckId: number): number {
    for (const value of this.numbersOfCardsThatNeedRepeating) {
      if (value.deckId === deckId) {
        return value.numberOfCardsThatNeedRepeating;
      }
    }
  }
}
