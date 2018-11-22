import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {NGXLogger} from 'ngx-logger';
import {Observable} from 'rxjs/Observable';
import {ImageDTO} from '../../../dto/ImageDTO/ImageDTO';
import {Response} from '@angular/http';
import {DTOConverter} from '../../../dto/dto.converter';
import {Link} from '../../../dto/link';
import {EditCategoryDTO} from '../../../dto/CategoryDTO/editCategoryDTO';
import {EditCourseDTO} from '../../../dto/CourseDTO/editCourseDTO';

@Injectable()
export class AdminCourseService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getUserImages(): Observable<ImageDTO[]> {
    return this.orlp.get('api/service/images/user/')
      .map((response: Response) => <ImageDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToImageDTO, response.json()));
  }

  addImage(file: any) {
    return this.orlp.post('/api/service/image', file)
      .map((response: Response) => response.json());
  }

  deleteImage(imageLink: string) {
    return this.orlp.deleteByLongLink(imageLink).map((response: Response) => this.logger.log(response));
  }

  updateCourse(id: String, courseEdited: EditCourseDTO) {
    // const shortLink: string = this.orlp.decodeLink(this.orlp.getShortLink(link));
    return this.orlp.put('api/cabinet/courses/' + id, courseEdited)
      .map((response: Response) => response.json());
  }
}
