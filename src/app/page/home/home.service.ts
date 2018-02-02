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
import {NGXLogger} from 'ngx-logger';
import {CourseLink} from "../../dto/CourseDTO/link.course.DTO";

@Injectable()
export class HomeService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getCategories(): Observable<CategoryTop[]> {
    return this.orlp.get('api/categories/top/')
      .map((response: Response) => <CourseLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToTopCategory, response.json()))
      .catch(this.handleError);
  }

  getCourses(): Observable<CourseLink[]> {
    return this.orlp.get('api/courses/top/')
      .map((response: Response) => <CourseLink[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this.logger.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
