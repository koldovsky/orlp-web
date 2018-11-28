import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {NGXLogger} from 'ngx-logger';
import {Observable} from 'rxjs/Observable';
import {ImageDTO} from '../../../dto/ImageDTO/ImageDTO';
import {Response} from '@angular/http';
import {DTOConverter} from '../../../dto/dto.converter';
import {EditCourseDTO} from '../../../dto/CourseDTO/editCourseDTO';
import {Link} from '../../../dto/link';
import {EditCoursePageDTO} from '../../../dto/CourseDTO/editCoursePageDTO';

@Injectable()
export class AdminCourseService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getCoursesByPage(numberPage: number, selectedSortingParam: string, ascending: boolean) {
    return this.orlp.get('/api/admin/courses?p=' + numberPage + '&sortBy=' + selectedSortingParam + '&asc=' + ascending)
      .map((response: Response) => <EditCoursePageDTO>
        DTOConverter.jsonAdminToCourseByPage(response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getUserImages(): Observable<ImageDTO[]> {
    return this.orlp.get('api/service/images/user/')
      .map((response: Response) => <ImageDTO[]>DTOConverter.jsonArrayToCollection(DTOConverter.jsonToImageDTO, response.json()))
      .catch(this.handleError);
  }

  addImage(file: any) {
    return this.orlp.post('/api/service/image', file)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  updateCourse(id: String, courseEdited: EditCourseDTO) {
    return this.orlp.put('api/cabinet/courses/' + id, courseEdited)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  deleteCourse(link: Link) {
    const shortLink: string = this.orlp.decodeLink(this.orlp.getShortLink(link));
    return this.orlp.delete(shortLink)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
}
