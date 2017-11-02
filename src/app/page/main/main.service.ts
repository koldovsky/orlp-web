import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../services/orlp.service';
import {UserDetailsDto} from '../../dto/UserDetailsDto';
import {DTOConverter} from '../../dto/dto.converter';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class MainService {
  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getUserDetails(): Observable<UserDetailsDto> {
    return this.orlp.get('api/private/user/details')
      .map((response: Response) => <UserDetailsDto> DTOConverter.jsonToUserDetails(response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
