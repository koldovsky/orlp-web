import {Injectable, NgZone} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {ORLPService} from '../../services/orlp.service';
import * as ORLPSettings from '../../services/orlp.settings';

@Injectable()
export class LogoutService {
  cookieWithToken: string = 'Authentication';

  constructor(private cookie: CookieService, private orlp: ORLPService, private ngZone: NgZone) {
  }

  isAuthorized(): boolean {
    if (this.cookie.get(this.cookieWithToken) != null) {
      this.getStatus();
      return true;
    }
    return false;
  }

  logout(): boolean {
    if (this.isAuthorized()) {
      this.cookie.remove(this.cookieWithToken);
      sessionStorage.setItem('status', 'INACTIVE');
      return true;
    }
    return false;
  }

  getStatus() {
    return this.orlp.get('api/status')
      .subscribe((response) => {
        this.ngZone.run(() => {
          sessionStorage.setItem('status', 'ACTIVE');
        });
      }, (error) => {
        if (error.status === ORLPSettings.LOCKED) {
          sessionStorage.setItem('status', 'DELETED');
        } else if (error.status === ORLPSettings.FORBIDDEN) {
          sessionStorage.setItem('status', 'BLOCKED');
        } else if (error.status === ORLPSettings.METHOD_NOT_ALLOWED) {
          sessionStorage.setItem('status', 'INACTIVE');
        }
      });
  }
}


