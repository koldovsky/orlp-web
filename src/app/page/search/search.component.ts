import {SearchService} from './search.service';
import {SearchResults} from '../../dto/SearchDTO/search.results.DTO';
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/publishReplay';
import {Link} from '../../dto/link';
import {ORLPService} from '../../services/orlp.service';
import {NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public results$: Observable<SearchResults>;
  public searchString: string;
  public newSearchString: string;

  constructor(private searchService: SearchService,
              private orlpService: ORLPService,
              private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  getShortLink(link: Link): string {
    return this.orlpService.getShortLink(link);
  }

  startLearning(deckId: number): void {
    this.router.navigate(['/cards', '/api/decks/' + deckId + '/learn']);
  }

  allArraysAreEmpty(result: SearchResults): boolean {
      if ((result.decks.length === 0) &&
        (result.courses.length === 0) && (result.categories.length === 0)) {
        return true;
      } else {
    return false;
      }
  }

  getSearchResults(searchString: string): void {
    this.results$ = this.searchService.getSearchResults(searchString);
    this.searchString = searchString;
  }

  ngOnInit(): void {
    this.results$ = this.searchService.results$.publishReplay().refCount();
    this.searchString = this.searchService.searchString;
  }

}
