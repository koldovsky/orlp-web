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

  sendMail(): Observable<Response> {
    return this.orlp.get('api/confirmation-mail');
  }

}
