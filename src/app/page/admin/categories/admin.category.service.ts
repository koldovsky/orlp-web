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

@Injectable()
export class AdminCategoryService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getCatalogs(): Observable<CategoriesPublic[]> {
    return this.orlp.get('api/category')
      .map((response: Response) => <CategoriesPublic[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCategories, response.json()))
      .catch(this.handleError);
  }

  public createCategory(newCategory: CreateCategoryDTO) {
    console.log(newCategory);
    return this.orlp.post('api/admin/add/category/', newCategory).map((response: Response) => response.json())
      .catch(this.handleError);
  }
  addImage(file: any) {
    return this.orlp.post('/api/service/image', file)
      .map((response: Response) => response.json());
  }

  public getUserImages(): Observable<ImageDTO[]> {
    return this.orlp.get('api/service/images/user/')
      .map((response: Response) => <ImageDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToImageDTO, response.json()));
  }

  deleteImage(imageId: number) {
    return this.orlp.delete('/api/service/image/' + imageId)
      .map((response: Response) => this.logger.log(response));
  }

  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
