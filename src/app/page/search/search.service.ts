import {Injectable} from '@angular/core';
import {ORLPService} from '../../services/orlp.service';
import {NGXLogger} from 'ngx-logger';
import {Observable} from 'rxjs/Observable';
import {SearchResults} from '../../dto/SearchDTO/search.results.DTO';
import {DTOConverter} from '../../dto/dto.converter';
import {Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {SearchComponent} from './search.component';

@Injectable()
export class SearchService {
  constructor(private orlp: ORLPService, private logger: NGXLogger) {
  }

  public results: SearchResults;

  getSearchResults(searchString: string): Observable<SearchResults> {
   return this.orlp.get('api/search/' + searchString)
      .map((response: Response) => <SearchResults>
        (DTOConverter.jsonToSearchResultsDTO(response.json())))
      .catch(this.handleError);
  }

  getResults(searchString: string): void {
    this.getSearchResults(searchString).subscribe(result => this.results = result);
  }

  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
