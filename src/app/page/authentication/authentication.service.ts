import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class AuthenticationService {
  cookieWithToken = 'Authentication';

  constructor(private cookie: CookieService) {
  }

  isAuthenticated(): boolean {
    if (this.cookie.get(this.cookieWithToken) != null) {
      return true;
    }
    return false;
  }
}
