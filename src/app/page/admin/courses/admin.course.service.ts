import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {NGXLogger} from 'ngx-logger';
import {Observable} from 'rxjs/Observable';
import {ImageDTO} from '../../../dto/ImageDTO/ImageDTO';
import {Response} from '@angular/http';
import {DTOConverter} from '../../../dto/dto.converter';

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
}
