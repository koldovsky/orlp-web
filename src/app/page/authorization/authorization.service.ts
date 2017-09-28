import {ORLPService} from "../../services/orlp.service";
import {Response} from '@angular/http';
import {EventEmitter, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthorizationService{

  isAuthorizedChange: EventEmitter<boolean> = new EventEmitter();

  constructor(private orlp: ORLPService) {
  }

  emitIsAuthorizedChangeEvent(boolean) {
    this.isAuthorizedChange.emit(boolean);
  }

  getIsAuthorizedChangeEmitter() {
    return this.isAuthorizedChange;
  }

  sendGoogleIdToken(idToken: string) {
    return this.orlp.post('api/auth/google', idToken)
      .map((response: Response) => console.log(response))
      .catch(this.handleErrorObservable);
  }

  sendFacebookToken(token: string) {
    return this.orlp.post('api/auth/facebook', token)
      .map((response: Response) => console.log(response))
      .catch(this.handleErrorObservable);
  }

  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error.message || error);
  }
}
