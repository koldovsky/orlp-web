import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {ORLPService} from '../../../services/orlp.service';
import {User} from '../../../dto/User';


@Injectable()
export class SignupService {
  private _controllerUrl = 'api/registration';

  constructor(private _orlp: ORLPService, private http: Http) {
  }


  registerUser(newUser: User): Observable<User> {
    return this._orlp.post(this._controllerUrl, newUser).map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error.message || error);
  }
}
