import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../services/orlp.service';
import {CategoryTop} from '../../dto/CategoryDTO/top.category.DTO';
import {DTOConverter} from '../../dto/dto.converter';
import {CourseTop} from '../../dto/CourseDTO/top.course.DTO';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class HomeService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getCategories(): Observable<CategoryTop[]> {
    return this.orlp.get('api/category/top/')
      .map((response: Response) => <CategoryTop[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToTopCategory, response.json()))
      .catch(this.handleError);
  }

  getCourses(): Observable<CourseTop[]> {
    return this.orlp.get('api/course/top/')
      .map((response: Response) => <CourseTop[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToTopCourse, response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this.logger.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
