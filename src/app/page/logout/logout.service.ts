import {Injectable, NgZone} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {ORLPService} from '../../services/orlp.service';
import * as ORLPSettings from '../../services/orlp.settings';

@Injectable()
export class LogoutService {
  cookieWithToken = 'Authentication';
  userIsAutorized = false;

  constructor(private cookie: CookieService, private orlp: ORLPService, private ngZone: NgZone) {
  }

  isAuthorized(): boolean {
    if (this.cookie.get(this.cookieWithToken) != null) {
      this.userIsAutorized = true;
      return true;
    }
    return false;
  }

  logout(): boolean {
    if (this.userIsAutorized === true) {
      this.cookie.removeAll();
      sessionStorage.setItem('status', 'INACTIVE');
      this.userIsAutorized = false;
      return true;
    }
    return false;
  }

}


