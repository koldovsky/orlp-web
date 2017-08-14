import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';
import {DTOConverter} from '../../../dto/dto.converter';

@Injectable()
export class UserCategoriesService {

  constructor(private orlp: ORLPService) {
  }

  getCategories(): Observable<CategoriesPublic[]> {
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
