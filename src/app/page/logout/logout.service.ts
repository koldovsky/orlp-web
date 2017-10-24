import {Injectable, NgZone} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {ORLPService} from "../../services/orlp.service";
import {Myboolean} from "../../dto/myboolean";

@Injectable()
export class LogoutService {
  cookieWithToken: string = 'Authentication';

  public isAuthorizedLogout: Myboolean = new Myboolean(false);

  constructor(private cookie: CookieService, private orlp: ORLPService, private ngZone: NgZone) {
  }

  isAuthorized(): boolean {
    if (this.cookie.get(this.cookieWithToken) != null) {
      return true;
    }
    return false;
  }

  isAuthorized2(): void {
    if (this.cookie.get(this.cookieWithToken) != null) {

      this.getStatus()
        .subscribe((response) => {
          this.ngZone.run(() => {
            this.isAuthorizedLogout.b = true;
          });
        }, (error) => {
          console.log(error.json());
          this.isAuthorizedLogout.b = false;
        });
    } else {
      this.isAuthorizedLogout.b = false;
    }
  }

  logout(): boolean {
    if (this.isAuthorized()) {
      this.cookie.remove(this.cookieWithToken);
      return true;
    }
    return false;
  }

  getStatus(): Observable<Response> {
    return this.orlp.get('api/status');
  }
}


