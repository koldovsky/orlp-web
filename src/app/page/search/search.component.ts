
import {SearchService} from './search.service';
import {SearchResults} from '../../dto/search.results.DTO';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

//  public results: SearchResults[] = [];
  public isLoaded = false;
  public searchString = '';

  constructor(private searchService: SearchService) {
  }


  ngOnInit() {
  }

  // public getSearchResults(searchString: string): void {
  //   this.isLoaded = true;
  //   this.searchService.getSearchResults(searchString).subscribe(results => this.results = results);
  //   console.log(this.results);
  // }

  public setSearchString(searchString: string): void {
    this.searchString = searchString;
  }

}
