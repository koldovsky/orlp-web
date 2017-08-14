import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {DTOConverter} from '../../../dto/dto.converter';
import {CoursePublic} from '../../../dto/CourseDTO/public.course.DTO';

@Injectable()
export class UserCoursesService {

  constructor(private orlp: ORLPService) {
  }

  getCourses(): Observable<CoursePublic[]> {
    return this.orlp.get('/api/courses')
      .map((response: Response) => <CoursePublic[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToPublicCourse, response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
