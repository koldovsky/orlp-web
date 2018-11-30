import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../../services/orlp.service';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';
import {DTOConverter} from '../../../dto/dto.converter';
import {NGXLogger} from 'ngx-logger';
import {ImageDTO} from '../../../dto/ImageDTO/ImageDTO';
import {CreateCategoryDTO} from '../../../dto/CategoryDTO/createCategoryDTO';
import {Link} from '../../../dto/link';
import {EditCategoryDTO} from '../../../dto/CategoryDTO/editCategoryDTO';

@Injectable()
export class AdminCategoryService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getCatalogs(): Observable<CategoriesPublic[]> {
    return this.orlp.get('api/categories')
      .map((response: Response) => <CategoriesPublic[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCategories, response.json()))
      .catch(this.handleError);
  }

  createCategory(newCategory: CreateCategoryDTO) {
    return this.orlp.post('api/admin/categories/', newCategory).map((response: Response) => response.json())
      .catch(this.handleError);
  }

  addImage(file: any) {
    return this.orlp.post('/api/service/image', file)
      .map((response: Response) => response.json());
  }

  getUserImages(): Observable<ImageDTO[]> {
    return this.orlp.get('api/service/images/user/')
      .map((response: Response) => <ImageDTO[]>DTOConverter.jsonArrayToCollection(DTOConverter.jsonToImageDTO, response.json()));
  }

  updateCategory(link: Link, categoryEdit: EditCategoryDTO) {
    const shortLink: string = this.orlp.decodeLink(this.orlp.getShortLink(link));
    return this.orlp.put(shortLink, categoryEdit)
      .map((response: Response) => response.json());
  }

  deleteCategory(link: Link) {
    const shortLink: string = this.orlp.decodeLink(this.orlp.getShortLink(link));
    return this.orlp.delete(shortLink)
      .map((response: Response) => response.json());
  }

  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
