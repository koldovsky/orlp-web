import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../../services/orlp.service';
import {ImageDTO} from '../../../dto/ImageDTO/ImageDTO';
import {DTOConverter} from '../../../dto/dto.converter';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {PrivateCourseDTO} from '../../../dto/CourseDTO/private.course.DTO';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class CourseService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  public getUserImages(): Observable<ImageDTO[]> {
    return this.orlp.get('api/service/images/user/')
      .map((response: Response) => <ImageDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToImageDTO, response.json()));
  }

  getCategories(): Observable<CategoryLink[]> {
    return this.orlp.get('api/categories/')
      .map((response: Response) => <CategoryLink[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCategory, response.json()));
  }

  createCourse(privateCourse: PrivateCourseDTO, category_id: number) {
    return this.orlp.post('api/categories/' + category_id + '/private/user/create/course/', privateCourse)
      .map((response: Response) => response.json());
  }

  addImage(file: any) {
    return this.orlp.post('/api/service/image', file)
      .map((response: Response) => response.json());
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
