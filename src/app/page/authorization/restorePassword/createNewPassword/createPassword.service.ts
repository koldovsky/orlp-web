import {NGXLogger} from 'ngx-logger';
import {Injectable} from '@angular/core';
import {ORLPService} from '../../../../services/orlp.service';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {NewPasswordDTO} from "../../../../dto/UsersDTO/NewPasswordDTO";


@Injectable()
export class CreatePasswordService {
  private url = 'api/verification/token';

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  tokenVerification(token: string): Observable<Response> {
    return this.orlp.put(this.url, token);
  }

  changePassword(password: NewPasswordDTO): Observable<Response> {
    console.log(password);
    return this.orlp.put('api/create/password', password)
      .map((response: Response) => this.logger.log(response))
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
