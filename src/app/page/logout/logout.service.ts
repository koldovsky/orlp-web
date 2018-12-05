import {Injectable} from '@angular/core';
import {CookieOptionsArgs, CookieService} from 'angular2-cookie/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class LogoutService {
  cookieWithToken = 'Authentication';
  opts: CookieOptionsArgs = {
    domain: environment.DOMAIN_NAME
  };

  constructor(private cookie: CookieService, private authentication: AuthenticationService) {
  }

  logout(): boolean {
    if (this.authentication.isAuthenticated()) {
      this.cookie.remove(this.cookieWithToken, this.opts);
      sessionStorage.setItem('status', 'INACTIVE');
      return true;
    }
    return false;
  }

}


