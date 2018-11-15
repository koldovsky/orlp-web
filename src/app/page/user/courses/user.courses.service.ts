import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {DTOConverter} from '../../../dto/dto.converter';
import {CoursePageDTO} from '../../../dto/CourseDTO/linkToCourseByPageDTO';
import {NGXLogger} from 'ngx-logger';
import {Link} from "../../../dto/link";
import {CoursePriceDTO} from "../../../dto/CourseDTO/price.course.DTO";
import {CoursePublic} from "../../../dto/CourseDTO/public.course.DTO";

@Injectable()
export class UserCoursesService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getCoursesByPage(numberPage: number, selectedSortingParam: string, ascending: boolean) {
    return this.orlp.get('/api/courses?p=' + numberPage + '&sortBy=' + selectedSortingParam + '&asc=' + ascending)
      .map((response: Response) => <CoursePageDTO>
        DTOConverter.jsonToCourseByPage(response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  updatePrice(course: CoursePublic){
    return this.orlp.put('/api/courses/' + course.courseId + '/', course)
      .map((response: Response) =>response.json());
  }


  deleteCourse(link: Link) {
    const shortLink: string = this.orlp.decodeLink(this.orlp.getShortLink(link));
    return this.orlp.delete(shortLink)
      .map((response: Response) =>response.json());
  }
}
