import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DTOConverter} from '../../../dto/dto.converter';
import {CourseLink} from '../../../dto/CourseDTO/link.course.DTO';

@Injectable()
export class CourseService {
  constructor(private orlp: ORLPService) {
  }

  getCourses(): Observable<CourseLink[]> {
    return this.orlp.get('api/courses/ordered')
      .map((response: Response) =>
        <CourseLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, response.json()));
  }
}
