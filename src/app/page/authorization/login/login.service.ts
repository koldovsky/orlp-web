import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {LoginAccount} from '../../../dto/LoginAccount';
import {ORLPService} from '../../../services/orlp.service';


@Injectable()
export class LoginService {

  constructor(private orlp: ORLPService) {
  }

  signIn(account: LoginAccount): Observable<Response> {
    return this.orlp.post('api/auth', account);
  }

  getStatus(): Observable<Response> {
    return this.orlp.get('api/status');
  }

  sendMail(): Observable<Response> {
    return this.orlp.get('api/confirmation-mail');
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error.message || error);
  }
}
