import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import {ORLPService} from '../../../services/orlp.service';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';
import {DTOConverter} from '../../../dto/dto.Converter';

@Injectable()
export class AdminCategoryService {

  constructor(private orlp: ORLPService) {
  }

  getCatalogs(): Observable<CategoriesPublic[]> {
    return this.orlp.get('api/category')
      .map((response: Response) => <CategoriesPublic[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToPublicCategories, response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
