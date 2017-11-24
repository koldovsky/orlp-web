import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import * as ORLPSettings from '../../services/orlp.settings';
import {Router} from '@angular/router';
import {AuthorizationService} from '../authorization/authorization.service';

@Injectable()
export class UserStatusChangeService {

  constructor(private router: Router, private authorizationService: AuthorizationService) {
  }

  public setUserStatus(errorStatus: number) {
    if (errorStatus === ORLPSettings.LOCKED) {
      sessionStorage.setItem('status', 'DELETED');
    } else if (errorStatus === ORLPSettings.FORBIDDEN) {
      sessionStorage.setItem('status', 'BLOCKED');
    }
  }

  public  handleUserStatusError (errorStatus: number) {
        if (errorStatus === ORLPSettings.LOCKED) {
          sessionStorage.setItem('status', 'DELETED');
          this.authorizationService.emitIsAuthorizedChangeEvent(false);
          this.router.navigate(['user/status/change']);
        } else if (errorStatus === ORLPSettings.FORBIDDEN) {
          sessionStorage.setItem('status', 'BLOCKED');
          this.router.navigate(['user/status/change']);
        }
    }
}

